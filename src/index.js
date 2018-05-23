import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Home from './pages/home/home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home/>, document.getElementById('root'));
registerServiceWorker();
