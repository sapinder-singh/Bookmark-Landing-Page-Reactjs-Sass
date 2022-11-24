import React, { useState } from 'react';
import styles from './Header.module.scss';
import Logo from '../../comps/Logo';
import HamburgerIcon from '../../images/icon-hamburger.svg';
import CloseIcon from '../../images/icon-close.svg';
import Cta from '../../comps/Cta';

export default function Header() {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <header className={styles.header}>
      <div className={styles['header-inner-wrapper']}>
        <Logo />

        <nav className={`${styles.navigation} ${isHidden ? styles.hide : ''}`}>
          <a className={styles.navlink} href="#features">
            Features
          </a>
          <a className={styles.navlink} href="#download-section">
            Download
          </a>
          <a className={styles.navlink} href="#contact">
            Contact
          </a>
          <Cta bg="red" size="narrow">
            <a className={styles.navlink} href="#form-section">
              Login
            </a>
          </Cta>
        </nav>

        <img
          className={styles['menu-icon']}
          src={isHidden ? HamburgerIcon : CloseIcon}
          onClick={() => setIsHidden(prev => !prev)}
          alt="menu"
        />
      </div>
    </header>
  );
}
