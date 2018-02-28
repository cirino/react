import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './Route/main';
import registerServiceWorker from './registerServiceWorker';

render(
    <App />,
    document.querySelector('[data-js="App"]')
)
registerServiceWorker();
