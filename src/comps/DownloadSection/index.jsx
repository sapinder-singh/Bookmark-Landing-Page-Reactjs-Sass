import React from 'react';
import './index.scss';
import { CardsData, Card } from './Card.jsx';

export default function DownloadSection() {
  return (
    <section className="download-section">
      <div className="title-div">
        <h2 className="title">Download the extension</h2>
        <p className="summary">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>

      <div className="cards">{CardsData.map(Card)}</div>
    </section>
  );
}
