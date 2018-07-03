import React from 'react'
// import PropTypes from 'prop-types'
// import {withStyles} from '@material-ui/core/styles'
// import Divider from '@material-ui/core/Divider'

import BodyCheck from '@/components/bodyCheck/bodyCheck'
import DailyLife from '@/components/dailyLife/dailyLife'
import './today.scss'

class Today extends React.Component {
  state = {
    mood: 'Not bad',
    work: 'Satisfying',
    diet: 'Satisfying',
    sleep: 'Not bad'
  };

  handleChange = (type, event) => {
    this.setState({[type]: event.target.value});
  };

  render() {
    // const {classes, theme} = this.props
    return (<div className="App">
      <DailyLife></DailyLife>
      <BodyCheck></BodyCheck>
    </div>)
  }
}

export default Today
