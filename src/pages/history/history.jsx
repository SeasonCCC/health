import React from 'react'
import { DatePicker } from 'material-ui-pickers'
import './history.scss'
// import PropTypes from 'prop-types'

class History extends React.Component {
  state = {
    selectedDate: new Date(),
  }

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  }

  render () {
    const { selectedDate } = this.state;
    return (
      <div className="App">
        <DatePicker
          disableOpenOnEnter
          maxDateMessage="Date must be less than today"
          value={selectedDate}
          onChange={this.handleDateChange}
          animateYearScrolling={false}
        />
      </div>
    );
  }
}

export default History
