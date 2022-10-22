import React from 'react';
import './App.scss';

import Header from './comps/Header';
import IntroSection from './comps/IntroSection';
import FeaturesSection from './comps/FeaturesSection';
import DownloadSection from './comps/DownloadSection';
import FAQs from './comps/FAQs';
import JoinSection from './comps/FormSection';
import Footer from './comps/Footer';

export default function App() {
  return (
    <>
      <Header />
      <IntroSection />
      <FeaturesSection />
      <DownloadSection />
      <FAQs />
      <JoinSection />
      <Footer />
    </>
  );
}
