import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Today from '@material-ui/icons/Today'
import History from '@material-ui/icons/History'
import ShowChart from '@material-ui/icons/ShowChart'
import './footer.scss'
import {observer} from 'mobx-react'

const styles = {
  selected: {
    color: '#2196f3!important'
  }
}

@observer
class Footer extends React.Component {
  state = {
    value: 'Today',
  };

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.store.changeTodoTitle(value)
  };

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className="footer">
        <BottomNavigationAction classes={{selected: classes.selected}} value="Today" icon={<Today />} label="TODAY" component={Link} to="/" replace />
        <BottomNavigationAction classes={{selected: classes.selected}} value="History" icon={<History />} label="HISTORY" component={Link} to="/history" replace />
        <BottomNavigationAction classes={{selected: classes.selected}} value="Analysis" icon={<ShowChart />} label="ANALYSIS" component={Link} to="/analysis" replace />
      </BottomNavigation>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Footer)
