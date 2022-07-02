import type { RGB } from './types/color';

export const RGBToHex = ({ r, g, b }: RGB): string => {
  const decimalToHex = (decimal: number): string => {
    const hex = decimal.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };

  const rhex = decimalToHex(r);
  const ghex = decimalToHex(g);
  const bhex = decimalToHex(b);

  return `#${rhex}${ghex}${bhex}`;
};

// Transforms sRGB values from 0-255 to 0-1.
export const calcDecimalColor = (color: number): number => {
  if (isNaN(color)) {
    throw new Error('Color value is not a number.');
  }
  if (color < 0 || color > 255) {
    throw new Error('Color value is out of expected range.');
  }
  return color / 255;
};

// Send this function a decimal sRGB gamma encoded color value
// between 0.0 and 1.0, and it returns a linearized value.
export const sRGBToLin = (color: number): number => {
  if (isNaN(color)) {
    throw new Error('Color value is not a number.');
  }
  if (color < 0 || color > 1) {
    throw new Error('Color value is out of expected range.');
  }
  if (color <= 0.04045) {
    return color / 12.92;
  } else {
    return Math.pow((color + 0.055) / 1.055, 2.4);
  }
};

export const calcLuminance = ({ r, g, b }: RGB): number => {
  const decimalR = calcDecimalColor(r);
  const decimalG = calcDecimalColor(g);
  const decimalB = calcDecimalColor(b);

  const luminance =
    0.2126 * sRGBToLin(decimalR) +
    0.7152 * sRGBToLin(decimalG) +
    0.0722 * sRGBToLin(decimalB);
  return luminance;
};

// Send this function a luminance value between 0.0 and 1.0, and it returns L* which is "perceptual lightness"
export const calcRelativeLuminance = (luminance: number) => {
  if (isNaN(luminance)) {
    throw new Error('Luminance value is not a number.');
  }
  if (luminance < 0 || luminance > 1) {
    throw new Error('Luminance value is out of expected range.');
  }

  if (luminance <= 216 / 24389) {
    // The CIE standard states 0.008856 but 216/24389 is the intent for 0.008856451679036
    return luminance * (24389 / 27);
    // The CIE standard states 903.3, but 24389/27 is the intent, making 903.296296296296296
  } else {
    return Math.pow(luminance, 1 / 3) * 116 - 16;
  }
};

export const getRelativeLuminance = (color: RGB): number => {
  const luminance = calcLuminance(color);
  return calcRelativeLuminance(luminance);
};

interface GetDistanceArgs {
  color1: RGB;
  color2: RGB;
}

// TODO: write unit test for this
export const getColorDistance = ({
  color1,
  color2,
}: GetDistanceArgs): number => {
  const relativeLuminance1 = getRelativeLuminance(color1);
  const relativeLuminance2 = getRelativeLuminance(color2);
  return Math.abs(relativeLuminance1 - relativeLuminance2);
};

interface CompareColorsArgs {
  color1: RGB;
  color2: RGB;
}

// TODO: write unit test for this
const isSameColor = ({ color1, color2 }: CompareColorsArgs) => {
  const rMatches = color1.r === color2.r;
  const gMatches = color1.g === color2.g;
  const bMatches = color1.b === color2.b;

  return rMatches && gMatches && bMatches;
};
