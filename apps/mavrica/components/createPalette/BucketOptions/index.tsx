import { useMemo } from 'react';

import Color from '../Color';

import type { Bucket } from '@mavrica/parser';

import styles from './BucketOptions.module.scss';

interface Props {
  colorOptions: Bucket['colors'];
  mainColor: Bucket['closestHex'];
  pickColor: (hex: string) => void;
  removeColor: (hex: string) => void;
}

const BucketOptions = ({ colorOptions, pickColor, removeColor }: Props) => {
  const renderOptions = useMemo(() => colorOptions.slice(0, 5), [colorOptions]);

  return (
    <div className={styles.container}>
      {renderOptions.map((hex) => (
        <Color
          key={hex}
          hex={hex}
          pickColor={pickColor}
          removeColor={removeColor}
        />
      ))}
    </div>
  );
};

export default BucketOptions;
