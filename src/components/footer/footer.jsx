import React from 'react'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Today from '@material-ui/icons/Today'
import History from '@material-ui/icons/History'
import ShowChart from '@material-ui/icons/ShowChart'
import './footer.scss'

export default class IconLabelTabs extends React.Component {
  state = {
    value: 'today'
  }

  handleChange = (event, value) => {
    this.setState({value});
  }

  render() {
    return (<Paper className="footer">
      <Tabs value={this.state.value} onChange={this.handleChange} fullWidth indicatorColor="secondary" textColor="secondary">
        <Tab value="today" icon={<Today />} label="TODAY" component={Link} to="/" />
        <Tab value="history" icon={<History />} label="HISTORY" component={Link} to="/history" />
        <Tab value="analysis" icon={<ShowChart />} label="ANALYSIS" component={Link} to="/analysis" />
      </Tabs>
    </Paper>);
  }
}
