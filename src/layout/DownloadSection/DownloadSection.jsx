import React from 'react';
import styles from './DownloadSection.module.scss';
import { CardsData, Card } from './Card.jsx';
import SectionHeader, {
  Title as SectionTitle,
  Summary as SectionSummary,
} from '../../comps/SectionHeader';

export default function DownloadSection() {
  return (
    <section id="download-section" className={styles.section}>
      <SectionHeader>
        <SectionTitle>Download the extension</SectionTitle>
        <SectionSummary>
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </SectionSummary>
      </SectionHeader>

      <div className={styles.cards}>{CardsData.map(Card)}</div>
    </section>
  );
}
