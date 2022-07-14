import axios from 'axios';
import { getRelativeLuminance, RGBToHex } from '../color';

interface ResizeReturn {
  imageData: ImageData;
  minInclusionCount: number;
}

const INCLUSION_PERCENTAGE = 0.005;
const MAX_IMAGE_SIZE = 500; // max width or height of the image

export const loadImage = (imageUrl: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = imageUrl;
    img.crossOrigin = `Anonymous`;
    img.onload = () => {
      resolve(img);
    };
    img.onerror = (err) => {
      reject(err);
    };
  });
};

export const getBase64Url = async (url: string) => {
  const image = await axios.get(url, { responseType: 'arraybuffer' });
  const raw = Buffer.from(image.data).toString('base64');
  return 'data:' + image.headers['content-type'] + ';base64,' + raw;
};

export const resizeImage = async (imageUrl: string): Promise<ResizeReturn> => {
  const base64Url = await getBase64Url(imageUrl);
  const image = await loadImage(base64Url);
  const { height, width } = image;

  // If image is already small enough, no need to resize
  if (height <= MAX_IMAGE_SIZE && width <= MAX_IMAGE_SIZE) {
    const allPixels = height * width;
    const minInclusionCount = (INCLUSION_PERCENTAGE * allPixels) / 100;

    const canvas = document.createElement('CANVAS') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    ctx?.drawImage(image, 0, 0, canvas.width, canvas.height);
    const imageData = ctx?.getImageData(0, 0, width, height);

    if (imageData === undefined) {
      throw new Error('Could not get image data');
    }

    return { imageData, minInclusionCount };
  }

  const canvas = document.createElement('CANVAS') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');

  let desiredHeight = height;
  let desiredWidth = width;

  if (height > MAX_IMAGE_SIZE || width > MAX_IMAGE_SIZE) {
    const scaleToHeight = height > width;
    if (scaleToHeight) {
      desiredHeight = MAX_IMAGE_SIZE;
      const scaleBy = MAX_IMAGE_SIZE / height;
      desiredWidth = width * scaleBy;
    } else {
      desiredWidth = MAX_IMAGE_SIZE;
      const scaleBy = MAX_IMAGE_SIZE / width;
      desiredHeight = height * scaleBy;
    }
  }

  canvas.width = desiredWidth;
  canvas.height = desiredHeight;

  ctx?.drawImage(image, 0, 0, canvas.width, canvas.height);
  const imageData = ctx?.getImageData(0, 0, desiredWidth, desiredHeight);

  const allPixels = desiredHeight * desiredWidth;
  const minInclusionCount = (INCLUSION_PERCENTAGE * allPixels) / 100;

  if (imageData === undefined) {
    throw new Error('Could not get image data');
  }

  return { imageData, minInclusionCount };
};

export const getPixels = async (imageData: ImageData) => {
  const data = {};
  for (let i = 0; i < imageData.data.length; i += 4) {
    const red = imageData.data[i];
    const green = imageData.data[i + 1];
    const blue = imageData.data[i + 2];

    const relativeLuminance = getRelativeLuminance({
      r: red,
      g: green,
      b: blue,
    });
    const roundedLuminance = roundToNearest(relativeLuminance, 10, 100);
    const hex = RGBToHex({ r: red, g: green, b: blue });

    // @ts-ignore this is throwaway code, will refactor after I am satisfied with parsing results
    const luminanceIncluded = data[roundedLuminance] !== undefined;

    if (!luminanceIncluded) {
      // @ts-ignore this is throwaway code, will refactor after I am satisfied with parsing results
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
      // @ts-ignore this is throwaway code, will refactor after I am satisfied with parsing results
      const newColors = data[roundedLuminance].colors.some(
        // @ts-ignore this is throwaway code, will refactor after I am satisfied with parsing results
        (color) => color.hex === hex
      )
        ? // @ts-ignore this is throwaway code, will refactor after I am satisfied with parsing results
          data[roundedLuminance].colors.map((color) => {
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
            // @ts-ignore this is throwaway code, will refactor after I am satisfied with parsing results
            ...data[roundedLuminance].colors,
            { hex, count: 1, relativeLuminance },
          ];
      // @ts-ignore this is throwaway code, will refactor after I am satisfied with parsing results
      data[roundedLuminance] = {
        // @ts-ignore this is throwaway code, will refactor after I am satisfied with parsing results
        count: data[roundedLuminance].count + 1,
        // @ts-ignore this is throwaway code, will refactor after I am satisfied with parsing results
        colors: newColors.sort((a, b) => {
          if (a.count === b.count) {
            return b.relativeLuminance - a.relativeLuminance;
          }
          return b.count - a.count;
        }),
        roundedLuminance,
      };
    }
  }

  return data;
};

const roundToNearest = (arg: number, roundTo: number, max: number) => {
  const roundedNumber = Math.round(arg / roundTo) * roundTo;
  if (roundedNumber > max) {
    return max;
  }
  return roundedNumber;
};
