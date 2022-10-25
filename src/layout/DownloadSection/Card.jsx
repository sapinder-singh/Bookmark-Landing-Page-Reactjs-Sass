import React from 'react';
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
    <div className={props.id} key={props.id}>
      <img
        className="browser-logo"
        src={`${process.env.PUBLIC_URL}/images/logo-${browserName}.svg`}
        alt={`logo-${browserName}`}
      />

      <h3>Add to {props.name}</h3>
      <small>Minimum version {props.version}</small>

      {/* BgDots */}
      <img className="bg-dots" src={BgDots} alt="bg-dots" />

      <a className="cta" href="./">
        Add &amp; Install Extension
      </a>
    </div>
  );
}
