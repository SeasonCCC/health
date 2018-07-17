import React from 'react'
// import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import { DatePicker } from 'material-ui-pickers'
import indigo from '@material-ui/core/colors/indigo'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

import BodyCheck from '@/components/bodyCheck/bodyCheck'
import DailyLife from '@/components/dailyLife/dailyLife'

import DateRangeIcon from '@material-ui/icons/DateRange'
import './history.scss'

const styles = theme => ({
  primary: {
    fontSize: '1.2rem',
    fontWeight: 'bold'
  },
  indigoAvatar: {
    color: '#fff',
    backgroundColor: indigo[500]
  },
});

@withStyles(styles)
class History extends React.Component {
  state = {
    selectedDate: new Date(),
  }

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  }

  render () {
    const { selectedDate } = this.state;
    const { classes } = this.props;
    return (
      <div className="App">
        <List subheader={<ListSubheader disableSticky>Health History</ListSubheader>}>
          <ListItem>
            <Avatar className={classes.indigoAvatar}>
              <DateRangeIcon/>
            </Avatar>
            <ListItemText classes={{
              primary: classes.primary
            }} primary="Date"/>
            <DatePicker
              disableFuture
              disableOpenOnEnter
              maxDateMessage="Date must be less than today"
              value={selectedDate}
              onChange={this.handleDateChange}
              animateYearScrolling={false}
            />
          </ListItem>
        </List>
        <Divider />
        <DailyLife select={false}></DailyLife>
        <BodyCheck></BodyCheck>
      </div>
    );
  }
}

export default History
