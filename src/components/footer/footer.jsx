import React from 'react'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Today from '@material-ui/icons/Today'
import History from '@material-ui/icons/History'
import ShowChart from '@material-ui/icons/ShowChart'
import './footer.scss'

export default class IconLabelTabs extends React.Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({value});
  }

  render() {
    return (<Paper className="footer">
      <Tabs value={this.state.value} onChange={this.handleChange} fullWidth indicatorColor="secondary" textColor="secondary">
        <Tab icon={<Today />} label="TODAY"/>
        <Tab icon={<History />} label="HISTORY"/>
        <Tab icon={<ShowChart />} label="ANALYSIS"/>
      </Tabs>
    </Paper>);
  }
}
