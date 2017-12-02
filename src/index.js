import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Typography from 'typography';
import theme from 'typography-theme-de-young';

const typography = new Typography(theme)
typography.toString()
typography.injectStyles()

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
