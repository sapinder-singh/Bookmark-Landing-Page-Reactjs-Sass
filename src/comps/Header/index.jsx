import React, { useState } from 'react';
import './index.scss';
import { ReactComponent as LogoBookmark } from '../../images/logo-bookmark.svg';
import HamburgerIcon from '../../images/icon-hamburger.svg';
import CloseIcon from '../../images/icon-close.svg';

export default function Header() {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <header className="header">
      <div className="header-inner-wrapper">
        <a className="brand" aria-label="brand-logo" href="./">
          <LogoBookmark className="logo" alt="logo-bookmark" />
        </a>

        <nav className={`navigation ${isHidden ? 'hide' : ''}`}>
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
          src={isHidden ? HamburgerIcon : CloseIcon}
          onClick={() => setIsHidden(prev => !prev)}
          alt="menu"
        />
      </div>
    </header>
  );
}
