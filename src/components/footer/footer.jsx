import React from 'react'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import PhoneIcon from '@material-ui/icons/Phone'
import FavoriteIcon from '@material-ui/icons/Favorite'
import PersonPinIcon from '@material-ui/icons/PersonPin'
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
      <Tabs value={this.state.value} onChange={this.handleChange} fullWidth="fullWidth" indicatorColor="secondary" textColor="secondary">
        <Tab icon={<PhoneIcon />} label="RECENTS"/>
        <Tab icon={<FavoriteIcon />} label="FAVORITES"/>
        <Tab icon={<PersonPinIcon />} label="NEARBY"/>
      </Tabs>
    </Paper>);
  }
}
