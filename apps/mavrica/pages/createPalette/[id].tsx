import { useState } from 'react';

import { getPaletteBuckets } from '@mavrica/parser';

import BucketOptions from '../../components/createPalette/BucketOptions';
import Color from '../../components/createPalette/Color';
import Image from 'next/image';

import styles from './createPalette.module.scss';

import type { InferGetServerSidePropsType } from 'next';
import type { Bucket } from '@mavrica/parser';

interface ColorManipArgs {
  bucketId: string;
  hex: string;
}

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  // TODO: need to handle invalid ids here
  const bucketsData = await getPaletteBuckets(id);

  return {
    props: {
      initialBucketsData: bucketsData,
    },
  };
};

const CreatePalette = ({
  initialBucketsData: { buckets, source },
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [bucketsData, setBucketsData] = useState<Bucket[]>(buckets);

  const removeColorChoice = ({ bucketId, hex }: ColorManipArgs) => {
    const newBucketsData = bucketsData.map((bucketData) => {
      if (bucketData.id === bucketId) {
        return {
          ...bucketData,
          colors: bucketData.colors.filter((color) => color !== hex),
        };
      }
      return {
        ...bucketData,
      };
    });
    setBucketsData(newBucketsData);
  };

  const pickColorChoice = ({ bucketId, hex }: ColorManipArgs) => {
    const newBucketsData = bucketsData.map((bucketData) => {
      if (bucketData.id === bucketId) {
        return {
          ...bucketData,
          colors: bucketData.colors.filter((color) => color !== hex),
          closestHex: hex,
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
          src={source.url}
        />
      </div>
      <h1>Current Palette</h1>
      <div className={styles.colorsContainer}>
        {bucketsData.map(({ closestHex }) => (
          <Color key={closestHex} hex={closestHex} />
        ))}
      </div>
      <h1>Color alternatives</h1>
      <div className={styles.colorsContainer}>
        {bucketsData.length > 0 &&
          bucketsData.map(({ id, closestHex, colors }) => {
            return (
              <BucketOptions
                colorOptions={colors}
                mainColor={closestHex}
                key={id}
                pickColor={(hex: string) =>
                  pickColorChoice({ bucketId: id, hex })
                }
                removeColor={(hex: string) =>
                  removeColorChoice({ bucketId: id, hex })
                }
              />
            );
          })}
      </div>
    </section>
  );
};

export default CreatePalette;
