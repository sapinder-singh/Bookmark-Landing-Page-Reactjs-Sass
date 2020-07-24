import React from 'react';
import './Intro-section.scss';
import IntroImg from '../../images/illustration-hero.svg';

export default function IntroSection() {
	return (
		<section className="intro-section">

			<div className="img-wrapper">
				<img className="intro-img" src={IntroImg} alt="img-illustration" />
			</div>

			<div className="text-wrapper">
				<h1>A Simple Bookmark Manager</h1>

				<p>A clean and simple interface to organize your favourite websites. Open a new 
				browser tab and see your sites load instantly. Try it for free.</p>

				<div className="download-links">
					<a className="cta" href="./">Get it on Chrome</a>
					<a className="cta" href="./">Get it on Firefox</a>
				</div>
			</div>
			
		</section>
	)
}