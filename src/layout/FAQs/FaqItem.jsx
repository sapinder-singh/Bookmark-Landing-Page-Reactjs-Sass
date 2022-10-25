import React from 'react';
import IconArrow from '../../images/icon-arrow.svg';

export const FaqData = [
  {
    quesId: 'faq1',
    question: 'What is Bookmark?',
    ansId: 'answer1',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla.Phasellus blandit ipsum quis quam ornare mattis.',
  },
  {
    quesId: 'faq2',
    question: 'How can I request a new browser?',
    ansId: 'answer2',
    answer:
      'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.Vivamus luctus eros aliquet convallis ultricies.Mauris augue massa,	ultricies non ligula.Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.Suspendisse imperdiet.',
  },
  {
    quesId: 'faq3',
    question: 'Is there a mobile app?',
    ansId: 'answer3',
    answer:
      'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget.Cras in ligula quis est pharetra mattis sit amet pharetra purus.Sed sollicitudin ex et ultricies bibendum.',
  },
  {
    quesId: 'faq4',
    question: 'What about other Chromium browsers?',
    ansId: 'answer4',
    answer:
      'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
  },
];

export default function FaqItem(props, index) {
  const checkboxId = `checkbox${index + 1}`;
  return (
    <React.Fragment key={props.quesId}>
      <label htmlFor={checkboxId} className={props.quesId}>
        {props.question}

        <img src={IconArrow} className="arrow-icon" alt="icon-dropdown" />
      </label>
      <input type="checkbox" id={checkboxId} />

      <small className={`${props.ansId} show`}>{props.answer}</small>
    </React.Fragment>
  );
}
