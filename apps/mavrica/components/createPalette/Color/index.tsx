import styles from './Color.module.scss';

interface Props {
  hex: string;
  pickColor?: (hex: string) => void;
  removeColor?: (hex: string) => void;
}

const Color = ({ hex, pickColor, removeColor }: Props) => {
  return (
    <div className={styles.color} key={hex} style={{ backgroundColor: hex }}>
      {!!removeColor && (
        <button
          className={styles.deleteButton}
          onClick={() => removeColor(hex)}
        >
          X
        </button>
      )}
      {!!pickColor && (
        <button className={styles.pickButton} onClick={() => pickColor(hex)}>
          P
        </button>
      )}
    </div>
  );
};

export default Color;
