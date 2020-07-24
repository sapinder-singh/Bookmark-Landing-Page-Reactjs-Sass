import React from 'react';
import './FAQs.scss';
import {FaqData, FaqItem} from './FAQs-data.jsx';

export default function FAQ() {

	return (
		<section className="faqs">

			<div className="title-div">
				<h2 className="title">Frequently Asked Questions</h2>
				<p className="summary">
					Here are some of our FAQs. If you have any other questions you’d like 
					answered please feel free to email us.
				</p>
			</div>
			
			<div className="select">
				{FaqData.map(FaqItem)}
			</div>

			<a href="./">More Info</a>
		</section>
	)
}