
export function NavigateFeatures(activeFeature, clickedFeature) {
	let optionsList = document.querySelectorAll('.features-section .select option');
	let featuresList = document.querySelectorAll('.features-section > [class^=feature]');
	
	// deactivate currently active feature
	featuresList[activeFeature].classList.remove('show-feature');
	optionsList[activeFeature].classList.remove('active');

	// activate clicked feature
	featuresList[clickedFeature].classList.add('show-feature');
	optionsList[clickedFeature].classList.add(`active`);

	// place highlighting div to active option
	HighlightOption(optionsList[clickedFeature]);

	// set activeFeature to clickedFeature
	return clickedFeature;
}

export function HighlightOption(option) {
	let highlightOption = document.querySelector('.features-section .select .highlight-active-option');

	highlightOption.style.top = option.offsetTop + 'px';
	highlightOption.style.left = option.offsetLeft + 'px';

	highlightOption.style.width = option.offsetWidth + 'px';
	highlightOption.style.height = option.offsetHeight + 'px';
}