import { driver } from './driver';

import type { Palette } from '../types/color';

export const getPalettes = async (): Promise<Palette[]> => {
  const session = driver.session();

  const palettesQuery = `
    MATCH (p:Palette)-[:INCLUDES]->(c:Color)
    WITH COLLECT({hex: c.hex,name:  c.name}) AS COLORS, p
    MATCH (p)-[:USED_FOR]-(s:Source)
    WITH COLLECT(s.name) as SOURCES, COLORS, p
    RETURN COLORS AS colors, SOURCES as sources, p.name as name
  `;
  const readResults = await session.readTransaction((tx) =>
    tx.run(palettesQuery)
  );

  const palettes: Palette[] = readResults.records.map((record) => {
    return {
      colors: record.get('colors'),
      name: record.get('name'),
      sources: record.get('sources'),
    };
  });

  return palettes;
};

// TODO: refactor this so it will only return predefined colors which have at least 1 tag
export const getColorsList = async () => {
  const session = driver.session();

  const readQuery = `
    MATCH (c:Color)-[a:ASSOCIATED_WITH]->(t:Tag)
    WITH COLLECT(t.name) AS tags, c
    RETURN  c.alternativeNames AS alternativeNames, c.hex AS hex, c.name AS name, c.temperature AS temperature, tags AS tags
  `;
  const readResult = await session.readTransaction((tx) => tx.run(readQuery));

  const colors = readResult.records.map((color) => {
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

export const savePalette = async (palette: Palette) => {
  const session = driver.session();

  const writePaletteQuery = `
    MERGE (p:Palette{name: $name})
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

  await session.writeTransaction((tx) => {
    tx.run(writePaletteQuery, {
      colors: palette.colors,
      name: palette.name,
      sources: palette.sources,
    });
  });
};
