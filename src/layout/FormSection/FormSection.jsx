import React from 'react';
import styles from './FormSection.module.scss';
import SectionHeader, {
  Title as SectionTitle,
} from '../../comps/SectionHeader';
import Cta from '../../comps/Cta';

export default function FormSection() {
  return (
    <section id="form-section" className={styles.section}>
      <SectionHeader>
        <small className={styles.small}>35,000+ already joined</small>

        <SectionTitle>Stay up-to-date with what we're doing</SectionTitle>
      </SectionHeader>

      <form className={styles.form}>
        <div className={styles['input-wrapper']}>
          <input
            className={styles.email}
            type="email"
            placeholder="Enter your Email Address"
            required
          />
          <small className={styles['error-message']}>
            Whoops, make sure it's an email
          </small>
        </div>
        <Cta bg="red" type="submit">
          Join Us
        </Cta>
      </form>
    </section>
  );
}
