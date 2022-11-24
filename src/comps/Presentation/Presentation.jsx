import React from 'react';
import styles from './Presentation.module.scss';

export default function Presentation({ children, className }) {
  return (
    <div className={`${styles['main-wrapper']} ${className || ''}`}>
      {children}
    </div>
  );
}

export function SideTextWrapper({ children }) {
  return <div className={styles['side-text-wrapper']}>{children}</div>;
}

export function Title({ AsHTMLTag = 'h2', children }) {
  return <AsHTMLTag className={styles.title}>{children}</AsHTMLTag>;
}

export function Explanation({ children }) {
  return <p className={styles.description}>{children}</p>;
}

export function CTAsWrapper({ children }) {
  return <div className={styles['CTAs-wrapper']}>{children}</div>;
}

export { default as Illustration, IllustrationStyles } from './Illustration';
