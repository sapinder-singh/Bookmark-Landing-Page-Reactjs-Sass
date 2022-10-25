import React, { useEffect } from 'react';
import './index.scss';
import FeatureItem, { featuresData } from './FeatureItem.jsx';
import useOptions from '../../hooks/useOptions';

export default function FeaturesSection() {
  const [optionsState, selectOption] = useOptions({
    numberOfOptions: 3,
    initialActiveIndex: 0,
  });

  const handleClick = e => selectOption({ indexToSelect: e.target.value });

  const highlightOption = option => {
    let highlightOption = document.querySelector(
      '.features-section .select .highlight-active-option'
    );

    highlightOption.style.top = option.offsetTop + 'px';
    highlightOption.style.left = option.offsetLeft + 'px';

    highlightOption.style.width = option.offsetWidth + 'px';
    highlightOption.style.height = option.offsetHeight + 'px';
  };

  useEffect(() => {
    const activeOption = document.querySelector(
      `.features-section .select .option.active`
    );
    highlightOption(activeOption);
  }, [optionsState]);

  return (
    <section id="features" className="features-section">
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
          <option
            className={`option ${optionsState[0]}`}
            value="0"
            onClick={handleClick}>
            Simple Bookmarking
          </option>

          <option
            className={`option ${optionsState[1]}`}
            value="1"
            onClick={handleClick}>
            Speedy Searching
          </option>

          <option
            className={`option ${optionsState[2]}`}
            value="2"
            onClick={handleClick}>
            Easy Sharing
          </option>
        </div>
      </div>

      {/* FeatureItems */}
      {featuresData.map((props, index) => (
        <FeatureItem
          key={props.id}
          class={props.id}
          title={props.title}
          brief={props.brief}
          state={optionsState[index]}
        />
      ))}
    </section>
  );
}
