import React from 'react';
import styles from './IntroSection.module.scss';
import IllustrationHeroSvg from '../../images/illustration-hero.svg';
import Cta from '../../comps/Cta';
import Presentation, {
  CTAsWrapper,
  Explanation,
  Illustration,
  SideTextWrapper,
  Title,
} from '../../comps/Presentation';

export default function IntroSection() {
  return (
    <section id="intro" className={styles.section}>
      <Presentation>
        <SideTextWrapper>
          <Title AsHTMLTag="h1">A Simple Bookmark Manager</Title>
          <Explanation>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </Explanation>
          <CTAsWrapper>
            <Cta>
              <a href="#download-chrome">Get it on Chrome</a>
            </Cta>
            <Cta bg="white">
              <a href="#download-firefox">Get it on Firefox</a>
            </Cta>
          </CTAsWrapper>
        </SideTextWrapper>

        <Illustration imgSrc={IllustrationHeroSvg} floatDirection="right" />
      </Presentation>
    </section>
  );
}
