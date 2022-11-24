import React from 'react';
import styles from './SectionHeader.module.scss';

export default function SectionHeader(props) {
  return <div className={styles.wrapper}>{props.children}</div>;
}

export function Title({ children, AsHTMLTag = 'h2' }) {
  return <AsHTMLTag className={styles.title}>{children}</AsHTMLTag>;
}
export function Summary({ children }) {
  return <p className={styles.summary}>{children}</p>;
}
