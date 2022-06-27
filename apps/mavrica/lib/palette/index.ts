import JIMP from 'jimp';

import {
  consolidateColors,
  getRelativeLuminance,
  RGBToHex,
} from '../color/helpers';
import { getFile } from '../../lib/wasabi';
import { savePalette } from '../../lib/db/palette';

import type { Color, Palette } from '../types/color';

const INCLUSION_PERCENTAGE = 0;
const ROUND_RGB_TO = 10;
const MAX_IMAGE_SIZE = 2000; // max width or height of the image

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

    rgb.r = roundToNearest(rgb.r, ROUND_RGB_TO);
    rgb.g = roundToNearest(rgb.g, ROUND_RGB_TO);
    rgb.b = roundToNearest(rgb.b, ROUND_RGB_TO);

    const relativeLuminance = getRelativeLuminance({
      r: rgb.r,
      g: rgb.g,
      b: rgb.b,
    });

    const hex = RGBToHex(rgb);

    const colorIncluded = data[hex] !== undefined;
    if (!colorIncluded) {
      data[hex] = {
        count: 1,
        rgb,
        relativeLuminance,
      };
    } else {
      data[hex] = {
        count: data[hex].count + 1,
        rgb,
        relativeLuminance,
      };
    }
  });

  const allPixels = desiredHeight * desiredWidth;
  const inclusionCount = (INCLUSION_PERCENTAGE * allPixels) / 100;

  const values = Object.keys(data)
    .map((key) => data[key])
    .filter((c) => c.count >= inclusionCount);

  try {
    const consolidatedColors = consolidateColors(values, 20000);
    const consolidatedColors2 = consolidateColors(consolidatedColors, 17500);
    const consolidatedColors3 = consolidateColors(consolidatedColors2, 15000);
    const consolidatedColors4 = consolidateColors(consolidatedColors3, 12500);
    const consolidatedColors5 = consolidateColors(consolidatedColors4, 10000);
    const consolidatedColors6 = consolidateColors(consolidatedColors5, 7500);
    const consolidatedColors7 = consolidateColors(consolidatedColors6, 5000);
    const consolidatedColors8 = consolidateColors(consolidatedColors7, 2500);
    const consolidatedColors9 = consolidateColors(consolidatedColors8, 1250);
    const consolidatedColors10 = consolidateColors(consolidatedColors9, 500);
    const consolidatedColors11 = consolidateColors(consolidatedColors10, 250);
    const consolidatedColors12 = consolidateColors(consolidatedColors11, 10);
    const sortedColors = consolidatedColors12.sort((a, b) => b.count - a.count);

    const finalColors = sortedColors.map((c) => {
      const hex = RGBToHex(c.rgb);
      return {
        hex,
      };
    });

    return finalColors;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const roundToNearest = (arg: number, roundTo: number) => {
  const roundedNumber = Math.round(arg / roundTo) * roundTo;
  if (roundedNumber > 255) {
    return 255;
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
