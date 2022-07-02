import * as JIMP from 'jimp';

import { getRelativeLuminance, RGBToHex } from './color';
import { getFile } from './wasabi';
import { savePalette } from './db/palette';

import type { Color, Palette } from './types/color';

const INCLUSION_PERCENTAGE = 0.000001;
const MAX_IMAGE_SIZE = 500; // max width or height of the image

export const getBufferPalette = async (
  imageBuffer: Buffer
): Promise<Color[]> => {
  const data = {};
  const jimpImage = await JIMP.read(imageBuffer);

  const height = jimpImage.bitmap.height;
  const width = jimpImage.bitmap.width;

  const scaleToHeight = height > width;

  let desiredHeight;
  let desiredWidth;

  if (scaleToHeight) {
    desiredHeight = MAX_IMAGE_SIZE;
    const scaleBy = MAX_IMAGE_SIZE / height;
    desiredWidth = width * scaleBy;
  } else {
    desiredWidth = MAX_IMAGE_SIZE;
    const scaleBy = MAX_IMAGE_SIZE / width;
    desiredHeight = height * scaleBy;
  }

  jimpImage.cover(desiredWidth, desiredHeight);

  jimpImage.scan(0, 0, desiredWidth, desiredHeight, function (x, y) {
    // x, y is the position of this pixel on the image
    // idx is the position start position of this rgb tuple in the bitmap Buffer
    // .this is the image

    const color = this.getPixelColor(x, y);
    const rgb = JIMP.intToRGBA(color);

    const relativeLuminance = getRelativeLuminance({
      r: rgb.r,
      g: rgb.g,
      b: rgb.b,
    });

    const roundedLuminance = roundToNearest(relativeLuminance, 11, 100);
    const hex = RGBToHex(rgb);

    const luminanceIncluded = data[roundedLuminance] !== undefined;
    if (!luminanceIncluded) {
      data[roundedLuminance] = {
        count: 1,
        colors: [
          {
            hex,
            count: 1,
            relativeLuminance,
          },
        ],
        roundedLuminance,
      };
    } else {
      const newColors = data[roundedLuminance].colors.some(
        (color) => color.hex === hex
      )
        ? data[roundedLuminance].colors.map((color) => {
            if (color.hex === hex) {
              return {
                ...color,
                count: color.count + 1,
              };
            }
            return {
              ...color,
            };
          })
        : [
            ...data[roundedLuminance].colors,
            { hex, count: 1, relativeLuminance },
          ];

      data[roundedLuminance] = {
        count: data[roundedLuminance].count + 1,
        colors: newColors.sort((a, b) => {
          if (a.count === b.count) {
            return b.relativeLuminance - a.relativeLuminance;
          }
          return b.count - a.count;
        }),
        roundedLuminance,
      };
    }
  });

  const bucketAverages = Object.keys(data).map((key) => {
    const bucket = data[key];

    const averageLum =
      bucket.colors.reduce((acc, color) => acc + color.relativeLuminance, 0) /
      bucket.colors.length;

    const pixelCount = bucket.colors.reduce(
      (acc, color) => acc + color.count,
      0
    );

    const closestHex = bucket.colors.reduce((acc, color) => {
      const proximity = Math.abs(averageLum - color.relativeLuminance);
      if (acc.proximity === undefined) {
        return {
          hex: color.hex,
          proximity,
        };
      }
      if (proximity < acc.proximity) {
        return {
          hex: color.hex,
          proximity,
        };
      }
      return acc;
    }, {});

    const sortedColors = bucket.colors
      .sort((a, b) => {
        return (
          Math.abs(averageLum - b.relativeLuminance) -
          Math.abs(averageLum - a.relativeLuminance)
        );
      })
      .filter((color) => color.hex !== closestHex.hex);

    return {
      bucket: key,
      colors: sortedColors,
      closestHex: closestHex,
      averageLum,
      pixelCount,
    };
  });

  const allPixels = desiredHeight * desiredWidth;
  const minInclusionCount = (INCLUSION_PERCENTAGE * allPixels) / 100;

  const returnValues = bucketAverages
    .filter((bucket) => bucket.pixelCount >= minInclusionCount)
    .sort((a, b) => b.pixelCount - a.pixelCount)
    .map((bucket) => {
      return { hex: bucket.closestHex.hex };
    });

  const missingColorsCount = 10 - returnValues.length;
  if (missingColorsCount > 0) {
    const colorsToAdd = bucketAverages
      .filter((bucket) => bucket.pixelCount >= minInclusionCount)
      .filter((bucket) => bucket.colors.length > 0)
      .sort((a, b) => a.pixelCount - b.pixelCount)
      .map((bucket) => {
        return { hex: bucket.colors[0].hex };
      })
      .slice(0, missingColorsCount);

    returnValues.push(...colorsToAdd);
  }

  return returnValues;
};

const roundToNearest = (arg: number, roundTo: number, max: number) => {
  const roundedNumber = Math.round(arg / roundTo) * roundTo;
  if (roundedNumber > max) {
    return max;
  }
  return roundedNumber;
};

export const saveKeyPalette = async (key: string): Promise<Palette> => {
  const res = await getFile(key);
  const paletteColors = await getBufferPalette(res);

  const palette = {
    colors: paletteColors,
    name: key,
    sources: [key],
  };

  await savePalette(palette);
  return palette;
};
