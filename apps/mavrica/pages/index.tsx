import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import styles from './index.module.scss';

import type { Palette } from '@mavrica/parser';

const baseImgUrl = 'https://s3.eu-west-1.wasabisys.com/mavrica/';

const Landing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [palettes, setPalettes] = useState<Palette[]>([]);

  const getPalettes = async ({ count, start }) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('/api/palettes', {
        count,
        start,
      });
      const newPalettes = [...palettes, ...data];

      setPalettes(newPalettes);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPalettes({ count: 20, start: 0 });
  }, []);

  // const loadMore = async () => {
  //   const count = 10;
  //   const start = palettes.length;
  //   await getPalettes({ count, start });
  // };

  return (
    <section className={styles.container}>
      <h1 className="heading-3">Saved palettes</h1>
      {palettes.map(({ colors, name, sources }) => {
        return (
          <section className={styles.paletteContainer} key={`palette-${name}`}>
            <h2 className="heading-4">{name}</h2>
            <ul className={styles.colorsContainer}>
              {colors.map(({ hex }) => {
                return (
                  <li
                    className={styles.color}
                    key={hex}
                    style={{ backgroundColor: hex }}
                  />
                );
              })}
            </ul>
            <ul className={styles.sourcesContainer}>
              {sources.map((source) => {
                const imgSource = `${baseImgUrl}${encodeURIComponent(source)}`;
                return (
                  <li className={styles.imageContainer} key={`image-${source}`}>
                    <Image
                      alt={name}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="left top"
                      src={imgSource}
                    />
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
      {isLoading && <div>Loading...</div>}
      {/* <button disabled={isLoading || palettes.length >= 299} onClick={loadMore}>
        Load more
      </button> */}
    </section>
  );
};

export default Landing;
