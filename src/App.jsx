import React from 'react';
import './App.scss';

import Header from './layout/Header';
import IntroSection from './layout/IntroSection';
import FeaturesSection from './layout/FeaturesSection';
import DownloadSection from './layout/DownloadSection';
import FAQs from './layout/FAQs';
import JoinSection from './layout/FormSection';
import Footer from './layout/Footer';

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
