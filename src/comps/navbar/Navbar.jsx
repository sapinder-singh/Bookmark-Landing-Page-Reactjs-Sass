import React, {useState} from 'react';
import './Navbar.scss';
import { ReactComponent as LogoBookmark } from '../../images/logo-bookmark.svg';
import HamburgerIcon from '../../images/icon-hamburger.svg';
import CloseIcon from '../../images/icon-close.svg';

export default function NavBar() {
	const [menuIcon, setIcon] = useState(HamburgerIcon);

	function revealMenu() {
		document.querySelector('.navbar .navigation').classList.toggle('reveal-menu');

		if(menuIcon === HamburgerIcon)
			setIcon(CloseIcon);
		else	setIcon(HamburgerIcon);
	}

	return (
		<nav className="navbar">

			<a className="brand" href="./">
				<LogoBookmark className="logo" alt="logo-bookmark" />
			</a>

			<div className="navigation">
				<a className="navlink" href="./">Features</a>
				<a className="navlink" href="./">Pricing</a>
				<a className="navlink" href="./">Contact</a>
				<a className="navlink login" href="./">Login</a>
			</div>

			<img className="menu-icon" src={menuIcon} onClick={revealMenu} alt="menu" />
		</nav>
	)
}