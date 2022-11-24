import React from 'react';
import styles from './Logo.module.scss';
import { ReactComponent as LogoBookmark } from '../../images/logo-bookmark.svg';

function Logo({ fill = 'black' }) {
  return (
    <a
      className={`${styles['logo-wrapper']} ${styles['logo-wrapper--' + fill]}`}
      aria-label="brand-logo"
      href="./">
      <LogoBookmark className={styles.logo} alt="logo-bookmark" />
    </a>
  );
}

export default Logo;
