import React from 'react';
import './index.scss';

export default function FormSection() {
  return (
    <section className="form-section">
      <small>35,000+ already joined</small>

      <h2>Stay up-to-date with what we're doing</h2>

      <form>
        <div className="input-wrapper">
          <input
            className="email"
            type="email"
            placeholder="Enter your Email Address"
            required
          />
          <small className="error-message">
            Whoops, make sure it's an email
          </small>
        </div>
        <button type="submit">Join Us</button>
      </form>
    </section>
  );
}
