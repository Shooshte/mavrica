import React from 'react';
import axios from 'axios';
import { useCallback, useEffect, useMemo, useState } from 'react';

import Image from 'next/image';
import ListPlaceholder from '../components/palettes/ListPlaceholder';
import { Virtuoso } from 'react-virtuoso';

import styles from './index.module.scss';

import type { Palette } from '@mavrica/parser';
import type { Components } from 'react-virtuoso';

// TODO: decide if this should be moved to .env or not
const baseImgUrl = 'https://s3.eu-west-1.wasabisys.com/mavrica/';
export const BATCH_SIZE = 10;

// TODO: add placeholders for images that are not yet loaded
// TODO: add placeholders for first palette load
const Landing = () => {
  const [palettes, setPalettes] = useState<Palette[]>([]);
  const [maxPalettesCount, setPalettesCount] = useState(BATCH_SIZE);

  const getPaletteCount = useCallback(async () => {
    try {
      const { data } = await axios.get('/api/palettesCount');
      setPalettesCount(data.count);
    } catch (e) {
      console.log(e);
    }
  }, [setPalettesCount]);

  const endReached = useMemo(() => {
    return palettes.length >= maxPalettesCount;
  }, [maxPalettesCount, palettes]);

  const palettesCount = useMemo(() => {
    return palettes.length;
  }, [palettes]);

  const getPalettes = useCallback(
    async ({ count = BATCH_SIZE, start = palettesCount }) => {
      try {
        const { data } = await axios.post('/api/palettes', {
          count,
          start,
        });
        const newPalettes = [...palettes, ...data];
        setPalettes(newPalettes);
      } catch (e) {
        console.log(e);
      }
    },
    [palettes, palettesCount]
  );

  const loadMore = useCallback(() => {
    if (endReached) {
      return;
    }
    return getPalettes({ count: BATCH_SIZE, start: palettesCount });
  }, [getPalettes, endReached, palettesCount]);

  useEffect(() => {
    getPalettes({ count: BATCH_SIZE, start: 0 });
    getPaletteCount();
  }, []);

  return (
    <Virtuoso
      context={{
        endReached,
      }}
      components={{
        EmptyPlaceholder: ListPlaceholder,
        Footer: ListFooter,
        Header: ListHeader,
        List: ListContainer,
      }}
      data={palettes}
      endReached={loadMore}
      style={{
        height: '100vh',
        width: '100%',
      }}
      itemContent={(index, { colors, name, sources }) => {
        return (
          <section
            className={styles.paletteContainer}
            key={`palette-${index}-${name}`}
          >
            <h2 className="heading-3">{name}</h2>
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
      }}
    />
  );
};

const ListHeader: Components['Header'] = () => {
  return <h1 className={`heading-2 ${styles.heading}`}>Saved palettes</h1>;
};

const ListContainer: Components['List'] = React.forwardRef(
  function ListContainer(props, ref) {
    return <div className={styles.container} {...props} ref={ref} />;
  }
);

// TODO: add CTA once palette creator is live
const ListFooter: Components['Footer'] = ({ context }) => {
  return (
    <div className={styles.footer}>
      {
        // @ts-expect-error context type
        context.endReached ? 'No more palettes to load.' : 'Loading palettes...'
      }
    </div>
  );
};

export default Landing;
