import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import Today from './pages/today/today'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

ReactDOM.render(
  <div>
    <Header></Header>
    <Today></Today>
    <Footer></Footer>
  </div>,
  document.getElementById('root')
);
registerServiceWorker();
