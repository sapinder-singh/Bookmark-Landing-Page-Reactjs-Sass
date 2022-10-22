import React, { useState } from 'react';
import './index.scss';
import { ReactComponent as LogoBookmark } from '../../images/logo-bookmark.svg';
import HamburgerIcon from '../../images/icon-hamburger.svg';
import CloseIcon from '../../images/icon-close.svg';

export default function Header() {
  const [menuIcon, setIcon] = useState(HamburgerIcon);

  const revealMenu = () => {
    document
      .querySelector('.header .navigation')
      .classList.toggle('reveal-menu');

    if (menuIcon === HamburgerIcon) setIcon(CloseIcon);
    else setIcon(HamburgerIcon);
  };

  return (
    <header className="header">
      <div className="header-inner-wrapper">
        <a className="brand" aria-label="brand-logo" href="./">
          <LogoBookmark className="logo" alt="logo-bookmark" />
        </a>

        <nav className="navigation">
          <a className="navlink" href="./">
            Features
          </a>
          <a className="navlink" href="./">
            Pricing
          </a>
          <a className="navlink" href="./">
            Contact
          </a>
          <a className="navlink login" href="./">
            Login
          </a>
        </nav>

        <img
          className="menu-icon"
          src={menuIcon}
          onClick={revealMenu}
          alt="menu"
        />
      </div>
    </header>
  );
}
