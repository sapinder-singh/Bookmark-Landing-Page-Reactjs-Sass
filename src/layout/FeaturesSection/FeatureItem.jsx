import React from 'react';
import FeatureItem1Svg from '../../images/feature-item-1.svg';
import FeatureItem2Svg from '../../images/feature-item-2.svg';
import FeatureItem3Svg from '../../images/feature-item-3.svg';
import Cta from '../../comps/Cta';
import Presentation, {
  CTAsWrapper,
  Explanation,
  Illustration,
  SideTextWrapper,
  Title,
} from '../../comps/Presentation';

export const featuresData = [
  {
    id: 'feature-item-1',
    title: 'Bookmark in one click',
    brief:
      'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    imgSrc: FeatureItem1Svg,
  },
  {
    id: 'feature-item-2',
    title: 'Intelligent search',
    brief:
      'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    imgSrc: FeatureItem2Svg,
  },
  {
    id: 'feature-item-3',
    title: 'Share your bookmarks',
    brief:
      'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    imgSrc: FeatureItem3Svg,
  },
];

export default function FeatureItem(props) {
  return (
    <Presentation className={`${props.id} ${props.className}`}>
      <Illustration imgSrc={props.imgSrc} floatDirection="left" />

      <SideTextWrapper>
        <Title AsHTMLTag="h3">{props.title}</Title>
        <Explanation>{props.brief}</Explanation>
        <CTAsWrapper>
          <Cta>
            <a href="./">More Info</a>
          </Cta>
        </CTAsWrapper>
      </SideTextWrapper>
    </Presentation>
  );
}
