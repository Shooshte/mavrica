import { useEffect, useState } from 'react';
import { getFile } from '../../lib/wasabi';

import Image from 'next/image';

import styles from './PaletteImage.module.scss';

interface Props {
  name: string;
  source: string;
}

const PaletteImage = ({ name, source }: Props) => {
  const [isLoading, setIsLoading] = useState(true); // component needs to load image data on mount
  const [error, setError] = useState<string>();
  const [base64, setBase64] = useState<string>();

  useEffect(() => {
    const parseImage = async () => {
      try {
        const buffer = await getFile(source);
        setBase64(buffer.toString('base64'));
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    parseImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.imageContainer}>
      {isLoading ? (
        'loading'
      ) : error ? (
        error
      ) : (
        <Image
          alt={name}
          layout="fill"
          objectFit="contain"
          objectPosition="left top"
          src={`data:image/jpeg;base64, ${base64}`}
        />
      )}
    </div>
  );
};

export default PaletteImage;
