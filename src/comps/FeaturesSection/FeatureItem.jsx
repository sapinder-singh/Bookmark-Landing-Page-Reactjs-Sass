import React from 'react';
import tabSVG1 from '../../images/illustration-features-tab-1.svg';
import tabSVG2 from '../../images/illustration-features-tab-2.svg';
import tabSVG3 from '../../images/illustration-features-tab-3.svg';

export const featuresData = [
  {
    id: 'feature1',
    title: 'Bookmark in one click',
    brief:
      'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
  },
  {
    id: 'feature2',
    title: 'Intelligent search',
    brief:
      'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
  },
  {
    id: 'feature3',
    title: 'Share your bookmarks',
    brief:
      'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
  },
];

export function FeatureItem(props, index) {
  let activeFeature = index === 0 ? 'show-feature' : '';

  return (
    <div key={props.id} className={props.id + ' ' + activeFeature}>
      <div className="img-wrapper">
        <img className="feature-img" src={renderSVG(index + 1)} alt="img-tab" />
      </div>

      <div className="text-wrapper">
        <h2>{props.title}</h2>
        <p>{props.brief}</p>
        <a className="cta" href="./">
          More Info
        </a>
      </div>
    </div>
  );
}

function renderSVG(serialNo) {
  switch (serialNo) {
    case 1:
      return tabSVG1;
    case 2:
      return tabSVG2;
    case 3:
      return tabSVG3;
    default:
      return new Error();
  }
}
