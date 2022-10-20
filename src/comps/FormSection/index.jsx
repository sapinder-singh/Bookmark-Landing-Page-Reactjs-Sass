import React from 'react';
import './index.scss';

function validate(e) {
  e.preventDefault();

  let email = document.querySelector('form .email');

  if (!email.checkValidity()) {
    email.classList.add('error');

    let message = document.querySelector('form .error-message');
    message.style.display = 'initial';
  } else {
    document.querySelector('form').submit();
  }
}

export default function JoinSection() {
  return (
    <section className="join-section">
      <small>35,000+ already joined</small>

      <h2>Stay up-to-date with what we’re doing</h2>

      <form noValidate onSubmit={e => validate(e)}>
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
