import neo4j from 'neo4j-driver';

import { defaultDriver } from './driver';

import type { Driver } from 'neo4j-driver';
import type { Palette } from '../types/color';

interface GetPalleteArgs {
  driver?: Driver;
  count?: number;
  start?: number;
}

export const getPalettesCount = async ({
  driver = defaultDriver,
}: {
  driver?: Driver;
}): Promise<number> => {
  const session = driver?.session();
  const palettesQuery = `
    MATCH (s:Source)<-[USED_FOR]-(p:Palette)-[:INCLUDES]->(c:Color)
    WITH COLLECT({hex: c.hex,name:  c.name}) AS COLORS, p, s
    WITH COLLECT(s.name) as SOURCES, COLORS, p
    RETURN p
  `;

  const readResults = await session?.readTransaction((tx) =>
    tx.run(palettesQuery, {})
  );
  return readResults?.records?.length || 0;
};

export const getPalettes = async ({
  driver = defaultDriver,
  count = 10,
  start = 0,
}: GetPalleteArgs): Promise<Palette[]> => {
  const session = driver?.session();
  // TODO: implement sorting sources by upload date
  const palettesQuery = `
    MATCH (p:Palette)-[:INCLUDES]->(c:Color)
    WITH COLLECT({hex: c.hex,name:  c.name}) AS COLORS, p
    MATCH (p)-[:USED_FOR]->(s:Source)
    WITH COLLECT(s.name) as SOURCES, COLORS, p
    SKIP $start LIMIT $count
    RETURN COLORS AS colors, SOURCES as sources, p.name as name, p.id as id
    ORDER BY p.createdAt DESC
  `;

  const readResults = await session?.readTransaction((tx) =>
    tx.run(palettesQuery, { count: neo4j.int(count), start: neo4j.int(start) })
  );

  const palettes: Palette[] | undefined = readResults?.records.map((record) => {
    return {
      colors: record.get('colors'),
      id: record.get('id'),
      name: record.get('name'),
      sources: record.get('sources'),
    };
  });

  return palettes || [];
};

// TODO: refactor this so it will only return predefined colors which have at least 1 tag
export const getColorsList = async ({
  driver = defaultDriver,
}: {
  driver?: Driver;
}) => {
  const session = driver?.session();

  const readQuery = `
    MATCH (c:Color)-[a:ASSOCIATED_WITH]->(t:Tag)
    WITH COLLECT(t.name) AS tags, c
    RETURN  c.alternativeNames AS alternativeNames, c.hex AS hex, c.name AS name, c.temperature AS temperature, tags AS tags
  `;
  const readResult = await session?.readTransaction((tx) => tx.run(readQuery));

  const colors = readResult?.records.map((color) => {
    const alternativeNames = color.get('alternativeNames');
    const hex = color.get('hex');
    const name = color.get('name');
    const temperature = color.get('temperature');
    const tags = color.get('tags');
    return {
      alternativeNames,
      hex,
      name,
      temperature,
      tags,
    };
  });

  return colors;
};

const writePaletteQuery = `
  MERGE (p:Palette {id: $id, name: $name})
  ON CREATE
    SET p.createdAt = timestamp()
  WITH p
  UNWIND $sources AS source
    MERGE (s:Source{name: source})
    MERGE (p)-[u:USED_FOR]->(s)
  WITH p
  UNWIND $colors AS color
    MERGE (c:Color{hex: color.hex})
    MERGE (p)-[i:INCLUDES]->(c)
  WITH p
  RETURN p AS Palette
`;

export const savePalette = async ({
  driver = defaultDriver,
  palette,
}: {
  driver?: Driver;
  palette: Palette;
}) => {
  const session = driver?.session();

  await session?.writeTransaction((tx) => {
    tx.run(writePaletteQuery, {
      colors: palette.colors,
      id: palette.id,
      name: palette.name,
      sources: palette.sources,
    });
  });
};

export interface Bucket {
  colors: string[];
  name: string;
  closestHex: string;
  averageLum: number;
  id: string;
  pixelCount: number;
}
export interface GetPaletteBucketsReturn {
  source: {
    id: string;
    url: string;
  };
  buckets: Bucket[];
}

export const getPaletteBuckets = async ({
  driver = defaultDriver,
  paletteId,
}: {
  driver?: Driver;
  paletteId: string;
}): Promise<GetPaletteBucketsReturn> => {
  const session = driver?.session();
  const readQuery = `
    MATCH(s:Source)<-[cr1:CREATED_FROM]-(b:Bucket)<-[cr2:CREATED_FROM]-(p:Palette{id: $paletteId})
      WITH COLLECT(b) as buckets, p, s
      UNWIND buckets AS bucket
      OPTIONAL MATCH (bucket)-[i:INCLUDES]->(c:Color)
      WITH COLLECT(c.hex) AS Colors, bucket, s
      WITH COLLECT({name: bucket.name, closestHex: bucket.closestHex, averageLum: bucket.averageLum, id: bucket.id, pixelCount: bucket.pixelCount, colors: Colors}) as Buckets, s
    RETURN s AS Source, Buckets
  `;

  const readResult = await session?.readTransaction((tx) =>
    tx.run(readQuery, { paletteId })
  );
  const finalResult = readResult?.records.map((record) => {
    const buckets = record.get('Buckets');
    const source = record.get('Source');

    const returnData = {
      buckets,
      source: { ...source.properties },
    };

    return returnData;
  });
  // @ts-ignore finalResult will either be a defined array or this function will throw earlier
  return finalResult[0];
};
