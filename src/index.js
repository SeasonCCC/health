import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Today from './pages/today/today';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(<Today/>, document.getElementById('root'));
registerServiceWorker();
