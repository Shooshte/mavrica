import { driver } from './driver';

import { v4 as uuid } from 'uuid';

import type { ParseResult } from '../types/color';

// image source (url)
// buckets
interface Params {
  buckets: ParseResult[];
  imageUrl: string;
  userEmail: string;
}

export const saveSourceBuckets = async ({
  buckets,
  imageUrl,
  userEmail,
}: Params) => {
  const paletteId = uuid();
  const imageId = uuid();

  const paletteQueryData = {
    paletteId,
    imageId,
    imageUrl,
    userEmail,
  };

  const paletteQuery = `
    MATCH (u:User {email: $userEmail})
      WITH u
      MERGE (u)-[:CREATED]->(s:Source {id: $imageId, url: $imageUrl})
      WITH u, s
      MERGE (u)-[:CREATED]->(p:Palette {id: $paletteId})
  `;

  const paletteSession = driver.session();
  await paletteSession.writeTransaction((tx) => {
    tx.run(paletteQuery, paletteQueryData);
  });
  paletteSession.close();

  const bucketQuery = `
    MATCH (s:Source {id: $imageId})
    WITH s
    MATCH (p:Palette {id: $paletteId})
    WITH s, p
    MERGE (b:Bucket {id: apoc.create.uuid(), name: $bucket.bucket, closestHex: $bucket.closestHex.hex, averageLum: $bucket.averageLum, pixelCount: $bucket.pixelCount})-[cf:CREATED_FROM]->(s)
    with p, b, $bucket AS bucket
    MERGE (p)-[pcf:CREATED_FROM]->(b)
    WITH p, b, bucket
    UNWIND bucket.colors AS color
      MERGE (c:Color {hex: color.hex, relativeLuminance: color.relativeLuminance})
      with p, c, b
      MERGE (b)-[in:INCLUDES]->(c)
  `;

  for (let x = 0; x < buckets.length; x++) {
    const bucket = buckets[x];
    const bucketQueryData = {
      bucket,
      imageId,
      paletteId,
    };
    const bucketSession = driver.session();
    await bucketSession.writeTransaction((tx) => {
      tx.run(bucketQuery, bucketQueryData);
    });
    bucketSession.close();
  }

  return paletteId;
};
