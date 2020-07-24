import React from 'react';
import './App.scss';

import NavBar from './navbar/Navbar.jsx';
import IntroSection from './intro-section/Intro-section.jsx';
import FeaturesSection from './features-section/Features-section.jsx';
import DownloadSection from './download-section/Downlod-section.jsx';
import FAQs from './faqs/FAQs.jsx';
import JoinSection from './join-section/Join-section.jsx';
import Footer from './footer/Footer.jsx';

export default function App() {
  return (
    <>
     	<NavBar/>
			<IntroSection/>
			<FeaturesSection/>
			<DownloadSection/>
			<FAQs/> 
			<JoinSection/>
			<Footer />
    </>
  );
}
