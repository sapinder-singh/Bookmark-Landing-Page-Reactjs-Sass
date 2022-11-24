import React from 'react';
import styles from './FAQs.module.scss';
import FaqItem, { FaqData } from './FaqItem.jsx';
import Cta from '../../comps/Cta';
import SectionHeader, {
  Summary as SectionSummary,
  Title as SectionTitle,
} from '../../comps/SectionHeader';

export default function FAQ() {
  return (
    <section className={styles.section}>
      <SectionHeader>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <SectionSummary>
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </SectionSummary>
      </SectionHeader>

      <div className={styles.select}>{FaqData.map(FaqItem)}</div>

      <Cta bg="blue">
        <a href="./">More Info</a>
      </Cta>
    </section>
  );
}
