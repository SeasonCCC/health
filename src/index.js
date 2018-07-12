import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import Today from './pages/today/today'
import History from './pages/history/history'
import Analysis from './pages/analysis/analysis'
// import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import registerServiceWorker from './registerServiceWorker'
import {HashRouter, Route, Switch} from 'react-router-dom'
import { Provider } from 'mobx-react'
import Store from './store/index'

import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'

const store = new Store()

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        {/*<Header></Header>*/}
        <Switch>
          <Route path="/" exact component={Today} />
          <Route path="/history" component={History} />
          <Route path="/analysis" component={Analysis} />
        </Switch>
        <Footer></Footer>
      </MuiPickersUtilsProvider>
    </Provider>
  </HashRouter>
, document.getElementById('root'));
registerServiceWorker();
