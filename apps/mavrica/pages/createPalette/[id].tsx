import { useState, useEffect } from 'react';

import BucketOptions from '../../components/createPalette/BucketOptions';
import Color from '../../components/createPalette/Color';
import Image from 'next/image';

import type { ParseResult } from '@mavrica/parser';

import styles from './createPalette.module.scss';
import testData from './temp/testData';

interface ColorManipArgs {
  bucket: string;
  hex: string;
}

const imageSrc =
  'https://s3.eu-west-1.wasabisys.com/mavrica/tests/the_houses_of_parliament_small.jpg';

const CreatePalette = () => {
  const [bucketsData, setBucketsData] = useState<ParseResult[]>([]);

  useEffect(() => {
    // TODO: later on this will be replaced by loading data from the API using the URL ID param
    setBucketsData(testData);
  }, []);

  const updateBucket = (bucket: ParseResult) => {
    const newBucketsData = bucketsData.map((bucketData) => {
      if (bucketData.bucket === bucket.bucket) {
        return { ...bucket };
      }
      return {
        ...bucketData,
      };
    });
    setBucketsData(newBucketsData);
  };

  const removeColorChoice = ({ bucket, hex }: ColorManipArgs) => {
    const newBucketsData = bucketsData.map((bucketData) => {
      if (bucketData.bucket === bucket) {
        return {
          ...bucketData,
          colors: bucketData.colors.filter((color) => color.hex !== hex),
        };
      }
      return {
        ...bucketData,
      };
    });
    setBucketsData(newBucketsData);
  };

  const pickColorChoice = ({ bucket, hex }: ColorManipArgs) => {
    const newBucketsData = bucketsData.map((bucketData) => {
      if (bucketData.bucket === bucket) {
        return {
          ...bucketData,
          colors: bucketData.colors.filter((color) => color.hex !== hex),
          closestHex: {
            // Distance is not important for this render. If needed calculate it using the @mavrica/parser helper functions
            hex,
            proximity: 0,
          },
        };
      }
      return {
        ...bucketData,
      };
    });
    setBucketsData(newBucketsData);
  };

  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          alt="image the color palette was generated from"
          layout="fill"
          src={imageSrc}
        />
      </div>
      <h1>Current Palette</h1>
      <div className={styles.colorsContainer}>
        {bucketsData.map(({ closestHex: { hex } }) => (
          <Color key={hex} hex={hex} />
        ))}
      </div>
      <h1>Color alternatives</h1>
      <div className={styles.colorsContainer}>
        {bucketsData.map(({ bucket, closestHex, colors }) => {
          return (
            <BucketOptions
              colorOptions={colors}
              mainColor={closestHex}
              key={bucket}
              pickColor={(hex: string) => pickColorChoice({ bucket, hex })}
              removeColor={(hex: string) => removeColorChoice({ bucket, hex })}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CreatePalette;
