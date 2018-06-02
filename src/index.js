import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Today from './pages/today/today';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home/>, document.getElementById('root'));
registerServiceWorker();
