import React from 'react';
import styles from './Illustration.module.scss';

export default function Illustration({ imgSrc, floatDirection, ...rest }) {
  return (
    <div
      className={`${styles.wrapper} ${styles[`float-${floatDirection}`]}`}
      {...rest}>
      <img
        className={styles.illustration}
        src={imgSrc}
        alt="img-illustration"
      />
    </div>
  );
}
