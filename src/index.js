import React from 'react';
import ReactDOM from 'react-dom';
import App from './comps/App.jsx';

import { HighlightOption } from './comps/FeaturesSection/navigateFeatures.js';

ReactDOM.render(<App />, document.getElementById('root'));

HighlightOption(document.querySelector('.features-section .select .option1'));
