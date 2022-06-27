import { getPalettes } from '../lib/db/palette';

//import PaletteImage from '../components/palette/PaletteImage';
import Image from 'next/image';

import type { InferGetServerSidePropsType } from 'next';

import styles from './index.module.scss';
import { getFile } from '../lib/wasabi';

export const getStaticProps = async () => {
  const palettes = await getPalettes();

  const parsedPalettes = await Promise.all(
    palettes.map(async (palette) => {
      const sources = await Promise.all(
        palette.sources.map(async (source) => {
          const fileBuffer = await getFile(source);
          return fileBuffer.toString('base64');
        })
      );

      return {
        ...palette,
        sources,
      };
    })
  );

  return { props: { parsedPalettes } };
};

const Landing = ({
  parsedPalettes,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <div>
      <h1>Currently saved palettes</h1>
      {parsedPalettes.map(({ colors, name, sources }) => {
        return (
          <div className={styles.paletteContainer} key={name}>
            <h2 className={styles.paletteTitle}>{name}</h2>
            {sources.map((source) => {
              return (
                <div className={styles.imageContainer} key={source}>
                  <Image
                    alt={name}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left top"
                    src={`data:image/jpeg;base64, ${source}`}
                  />
                </div>
              );
            })}
            <div className={styles.colorsContainer}>
              {colors.map(({ hex }) => {
                return (
                  <div
                    className={styles.color}
                    key={hex}
                    style={{ backgroundColor: hex }}
                  >
                    {hex}
                  </div>
                );
              })}
            </div>
            <div></div>
          </div>
        );
      })}
    </div>
  );
};

export default Landing;
