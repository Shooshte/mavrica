import { useState, useMemo, useEffect } from 'react';
import axios from 'axios';

import { getSeedKeys } from '../../lib/wasabi';

import styles from './seedPalettes.module.scss';

import type { InferGetServerSidePropsType } from 'next';

export const getServerSideProps = async () => {
  const keys = await getSeedKeys();
  return { props: { keys } };
};

const SeedPalettes = ({
  keys,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const initialKeys = useMemo(() => {
    return keys.map((key) => {
      return { key, status: 'Not started' };
    });
  }, [keys]);

  const [keysStatus, setKeysStatus] = useState(initialKeys);

  const parseImages = async () => {
    axios.get('api/clearPalettes');
    const newKeys = keysStatus.map((stateKey) => {
      return { key: stateKey.key, status: 'Waiting' };
    });
    setKeysStatus(newKeys);
  };

  useEffect(() => {
    const parsekey = async (key: string) => {
      try {
        await axios.post('/api/parseImage', { filePath: key });

        const newStatuses = keysStatus.map((stateKey) => {
          if (stateKey.key === key) {
            return {
              key,
              status: 'Parsed',
            };
          }
          return {
            ...stateKey,
          };
        });
        setKeysStatus(newStatuses);
      } catch (e) {
        const newStatuses = keysStatus.map((stateKey) => {
          if (stateKey.key === key) {
            return {
              key,
              status: 'Error',
            };
          }
          return {
            ...stateKey,
          };
        });
        setKeysStatus(newStatuses);
      }
    };

    const nextKey = keysStatus.find((key) => key.status === 'Waiting');
    if (nextKey) {
      parsekey(nextKey.key);
    }
  }, [keysStatus]);

  return (
    <div className={styles.container}>
      <h1>Images:</h1>
      <button onClick={parseImages}>Start processing</button>
      <ul className={styles.ul}>
        {keysStatus.map(({ key, status }) => {
          return (
            <li key={key} className={styles.li}>
              <div>{key}</div>
              <div>{status}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SeedPalettes;
