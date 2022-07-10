import ImageLoading from '../../image/svg/loading';

import styles from './ListPlaceholder.module.scss';

const array = new Array(10);
const placeholder = [...array.keys()];

const ListPlaceholder = () => {
  return (
    <div className={styles.container}>
      {placeholder.map((index) => {
        return (
          <section
            className={styles.paletteContainer}
            key={`palette-placeholder-${index}`}
          >
            <h2 className={styles.heading}></h2>
            <ul className={styles.colorsContainer}>
              {placeholder.map((index) => {
                return (
                  <li
                    className={styles.color}
                    key={`color-placeholder-${index}`}
                  />
                );
              })}
            </ul>
            <ul className={styles.sourcesContainer}>
              <li
                className={styles.imageContainer}
                key={`image-placeholder-${index}`}
              >
                <ImageLoading />
              </li>
            </ul>
          </section>
        );
      })}
    </div>
  );
};

export default ListPlaceholder;
