import React from 'react'
// import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
// import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import BodyCheck from '@/components/bodyCheck/bodyCheck'
import DailyLife from '@/components/dailyLife/dailyLife'
import './today.scss'

const styles = theme => ({
  button: {
    background: '#2196f3',
    margin: '10px auto 60px auto',
    color: '#fff'
  }
})

@withStyles(styles, {withTheme: true})
class Today extends React.Component {
  render() {
    const {classes} = this.props
    return (<div className="App">
      <DailyLife></DailyLife>
      <BodyCheck></BodyCheck>
      <div className="tc">
        <Button variant="raised" className={classes.button}>
          Submit
        </Button>
      </div>
    </div>)
  }
}

export default Today
