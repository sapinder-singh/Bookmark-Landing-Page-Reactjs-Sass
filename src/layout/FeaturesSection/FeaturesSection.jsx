import React, { useEffect, useRef } from 'react';
import styles from './FeaturesSection.module.scss';
import FeatureItem, { featuresData } from './FeatureItem.jsx';
import SectionHeader, {
  Title as SectionTitle,
  Summary as SectionSummary,
} from '../../comps/SectionHeader';
import useOptions from '../../hooks/useOptions';

export default function FeaturesSection() {
  const { optionsState, setOptionsState, reducedClassNames } = useOptions({
    numberOfOptions: 3,
    initialActiveIndex: 0,
    activeClassName: styles['active-option'],
  });
  const optionsRef = useRef([]);
  const highlightableRef = useRef();

  const handleClick = e => setOptionsState({ indexToSelect: e.target.value });

  const highlightOption = option => {
    Object.assign(highlightableRef.current.style, {
      top: option.offsetTop + 'px',
      left: option.offsetLeft + 'px',
      width: option.offsetWidth + 'px',
      height: option.offsetHeight + 'px',
    });
  };

  useEffect(() => {
    const activeOptionIndex = optionsState.findIndex(
      state => state === 'active'
    );

    highlightOption(optionsRef.current[activeOptionIndex]);
  }, [optionsState]);

  return (
    <section id="features" className={styles.section}>
      <SectionHeader>
        <SectionTitle>Features</SectionTitle>
        <SectionSummary>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </SectionSummary>
      </SectionHeader>

      <ul className={styles.select}>
        <div ref={highlightableRef} className={styles.highlightable} />

        <li
          className={`${styles.option} ${reducedClassNames[0]}`}
          ref={elem => (optionsRef.current[0] = elem)}
          value="0"
          onClick={handleClick}>
          Simple Bookmarking
        </li>

        <li
          className={`${styles.option} ${reducedClassNames[1]}`}
          ref={elem => (optionsRef.current[1] = elem)}
          value="1"
          onClick={handleClick}>
          Speedy Searching
        </li>

        <li
          className={`${styles.option} ${reducedClassNames[2]}`}
          ref={elem => (optionsRef.current[2] = elem)}
          value="2"
          onClick={handleClick}>
          Easy Sharing
        </li>
      </ul>

      {featuresData.map((props, index) => (
        <FeatureItem
          key={props.id}
          className={
            optionsState[index] === 'active' ? styles['active-feature'] : ''
          }
          {...props}
        />
      ))}
    </section>
  );
}
