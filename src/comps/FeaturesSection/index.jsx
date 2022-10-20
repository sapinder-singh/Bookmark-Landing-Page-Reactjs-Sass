import React, { useState } from 'react';
import './index.scss';
import { NavigateFeatures } from './navigateFeatures.js';
import { featuresData, FeatureItem } from './FeatureItem.jsx';

export default function FeaturesSection() {
  let [activeFeature, setActiveFeature] = useState(0); // 0 is the index of activeFeature

  const handleClick = e => {
    if (e.target.value === activeFeature) return;
    else setActiveFeature(NavigateFeatures(activeFeature, e.target.value));
  };

  return (
    <section className="features-section">
      <div className="main-text-wrapper">
        <div className="title-div">
          <h2 className="title">Features</h2>
          <p className="summary">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>

        <div className="select">
          <div className="highlight-active-option" />
          <option className="option1 active" value="0" onClick={handleClick}>
            Simple Bookmarking
          </option>

          <option className="option2" value="1" onClick={handleClick}>
            Speedy Searching
          </option>

          <option className="option3" value="2" onClick={handleClick}>
            Easy Sharing
          </option>
        </div>
      </div>

      {/* FeatureItems */}
      {featuresData.map(FeatureItem)}
    </section>
  );
}
