import React from 'react';
import styles from './DownloadSection.module.scss';
import Cta from '../../comps/Cta/Cta';
import BgDots from '../../images/bg-dots.svg';

export const CardsData = [
  {
    id: 'card1',
    name: 'Chrome',
    version: 62,
  },
  {
    id: 'card2',
    name: 'Firefox',
    version: 55,
  },
  {
    id: 'card3',
    name: 'Opera',
    version: 46,
  },
];

export function Card(props) {
  const browserName = props.name.toLowerCase();

  return (
    <div className={styles.card} key={props.id}>
      <img
        className={styles['browser-logo']}
        src={`${process.env.PUBLIC_URL}/images/logo-${browserName}.svg`}
        alt={`logo-${browserName}`}
      />

      <h3 className={styles['card-title']}>Add to {props.name}</h3>
      <small className={styles['card-subtitle']}>
        Minimum version {props.version}
      </small>

      {/* BgDots */}
      <img className={styles['bg-dots']} src={BgDots} alt="bg-dots" />

      <Cta id={`download-${browserName}`}>Add &amp; Install Extension</Cta>
    </div>
  );
}
