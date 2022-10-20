import React from 'react';
import './App.scss';

import NavBar from './Navbar';
import IntroSection from './IntroSection';
import FeaturesSection from './FeaturesSection';
import DownloadSection from './DownloadSection';
import FAQs from './FAQs';
import JoinSection from './FormSection';
import Footer from './Footer';

export default function App() {
  return (
    <>
      <NavBar />
      <IntroSection />
      <FeaturesSection />
      <DownloadSection />
      <FAQs />
      <JoinSection />
      <Footer />
    </>
  );
}
