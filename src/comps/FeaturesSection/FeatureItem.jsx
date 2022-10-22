import React from 'react';

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

export default function FeatureItem(props) {
  return (
    <div key={props.id} className={props.class + ' ' + props.state}>
      <div className="img-wrapper">
        <img
          className="feature-img"
          src={`${
            process.env.PUBLIC_URL
          }/images/illustration-features-tab-${props.class.slice(-1)}.svg`}
          alt="img-tab"
        />
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
