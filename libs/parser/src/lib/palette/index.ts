// import { getPixels, resizeImage } from './image';

// import type { ParseResult } from '../../types/color';

// export const getBufferPalette = async (
//   buffer: Buffer
// ): Promise<ParseResult[]> => {
//   const { imageBuffer, minInclusionCount } = await resizeImage(buffer);
//   const pixelsData = await getPixels(imageBuffer);

//   const bucketAverages = Object.keys(pixelsData).map((key) => {
//     // @ts-ignore this is throwaway code, will refactor after I am satisfied with parsing results
//     const bucket = pixelsData[key];

//     const averageLum =
//       // @ts-ignore this is throwaway code, will refactor after I am satisfied with parsing results
//       bucket.colors.reduce((acc, color) => acc + color.relativeLuminance, 0) /
//       bucket.colors.length;

//     const pixelCount = bucket.colors.reduce(
//       // @ts-ignore this is throwaway code, will refactor after I am satisfied with parsing results
//       (acc, color) => acc + color.count,
//       0
//     );
//     // @ts-ignore this is throwaway code, will refactor after I am satisfied with parsing results
//     const closestHex = bucket.colors.reduce((acc, color) => {
//       const proximity = Math.abs(averageLum - color.relativeLuminance);
//       if (acc.proximity === undefined) {
//         return {
//           hex: color.hex,
//           proximity,
//         };
//       }
//       if (proximity < acc.proximity) {
//         return {
//           hex: color.hex,
//           proximity,
//         };
//       }
//       return acc;
//     }, {});

//     const sortedColors = bucket.colors
//       // @ts-ignore this is throwaway code, will refactor after I am satisfied with parsing results
//       .filter((color) => color.count > minInclusionCount)
//       // @ts-ignore this is throwaway code, will refactor after I am satisfied with parsing results
//       .sort((a, b) => {
//         return (
//           averageLum - b.relativeLuminance - (averageLum - a.relativeLuminance)
//         );
//       })
//       // @ts-ignore this is throwaway code, will refactor after I am satisfied with parsing results
//       .filter((color) => color.hex !== closestHex.hex);

//     return {
//       bucket: key,
//       colors: sortedColors,
//       closestHex: closestHex,
//       averageLum,
//       pixelCount,
//     };
//   });

//   const returnValues = bucketAverages
//     .filter((bucket) => bucket.pixelCount >= minInclusionCount)
//     .sort((a, b) => b.pixelCount - a.pixelCount);

//   return returnValues;
// };
