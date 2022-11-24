import React from 'react';
import styles from './Footer.module.scss';
import Logo from '../../comps/Logo';
import { ReactComponent as IconFB } from '../../images/icon-facebook.svg';
import { ReactComponent as IconTwtr } from '../../images/icon-twitter.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.navigation}>
        <Logo fill="white" />
        <a className={styles.navlink} href="#features">
          Features
        </a>
        <a className={styles.navlink} href="#download-section">
          Download
        </a>
        <a className={styles.navlink} href="#contact">
          Contact
        </a>
      </nav>

      <div className={styles['social-links']}>
        <a
          className={styles.navlink}
          href="./"
          aria-label="Connect on Facebook">
          <IconFB className="icon-fb" alt="icon-fb" />
        </a>
        <a className={styles.navlink} href="./" aria-label="Connect on Twitter">
          <IconTwtr className="icon-twtr" alt="icon-twtr" />
        </a>
      </div>
    </footer>
  );
}
