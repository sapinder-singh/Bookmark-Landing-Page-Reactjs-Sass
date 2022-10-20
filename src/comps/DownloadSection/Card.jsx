import React from 'react';
import LogoChrome from '../../images/logo-chrome.svg';
import LogoFirefox from '../../images/logo-firefox.svg';
import LogoOpera from '../../images/logo-opera.svg';
import BgDots from '../../images/bg-dots.svg';

export const CardsData = [
	{
		id: 'card1',
		name: 'Chrome',
		version: 62
	},
	{
		id: 'card2',
		name: 'Firefox',
		version: 55
	},
	{
		id: 'card3',
		name: 'Opera',
		version: 46
	}
];


export function Card(props) {
	return (
		<div className={props.id} key={props.id}>

			{/* Browser Logo */}
			<img className="browser-logo" 
					 src={renderCardLogo(props.name)} 
					 alt={`logo-${props.name.toLowerCase()}`} />

			<h3>Add to {props.name}</h3>
			<small>Minimum version {props.version}</small>

			{/* BgDots */}
			<img className="bg-dots" src={BgDots} alt="bg-dots" />

			<a className="cta" href="./">Add & Install Extension</a>

		</div>
	)
}

function renderCardLogo(name) {
	switch(name) {
		case 'Chrome': return LogoChrome;
		case 'Firefox': return LogoFirefox;
		case 'Opera': return LogoOpera;
		default: return new Error();
	}
}