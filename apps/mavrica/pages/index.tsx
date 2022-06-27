import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import styles from './index.module.scss';

import type { Palette } from '../lib/types/color';

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
      setPalettes([...palettes, ...data]);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPalettes({ count: 1, start: 0 });
  }, []);

  const loadMore = async () => {
    const count = 1;
    const start = palettes.length;

    await getPalettes({ count, start });
  };

  return (
    <div>
      <h1>Currently saved palettes</h1>
      {palettes.map(({ colors, name, sources }) => {
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
      {isLoading && <div>Loading...</div>}
      <button disabled={isLoading || palettes.length >= 154} onClick={loadMore}>
        Just one more...
      </button>
    </div>
  );
};

export default Landing;
