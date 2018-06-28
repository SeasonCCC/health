import React from 'react'
// import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import pink from '@material-ui/core/colors/pink'
import blue from '@material-ui/core/colors/blue'
import brown from '@material-ui/core/colors/brown'
import indigo from '@material-ui/core/colors/indigo'

import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import MoodIcon from '@material-ui/icons/Mood';
import WorkIcon from '@material-ui/icons/Work';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import Brightness2Icon from '@material-ui/icons/Brightness2';

// import Select from '@/components/select/select'
import './today.scss'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  chip: {
    margin: theme.spacing.unit / 4
  },
  primary: {
    fontSize: '1.2rem',
    fontWeight: 'bold'
  },
  pinkAvatar: {
    color: '#fff',
    backgroundColor: pink[500]
  },
  blueAvatar: {
    color: '#fff',
    backgroundColor: blue[500]
  },
  brownAvatar: {
    color: '#fff',
    backgroundColor: brown[500]
  },
  indigoAvatar: {
    color: '#fff',
    backgroundColor: indigo[500]
  }
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const selectObj = {
  mood: [
    'Excellent', 'Good', 'Not bad', 'Bad', 'Terrible'
  ],
  work: [
    'Rewarding', 'Satisfying', 'Mundane', 'Stressful', 'Boring'
  ],
  diet: [
    'Delicious', 'Satisfying', 'Common', 'Not enough', 'Terrible'
  ],
  sleep: ['Excellent', 'Good', 'Not bad', 'Bad', 'Terrible']
}

@withStyles(styles, {withTheme: true})
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
    const {classes, theme} = this.props
    return (<div className="App">
      <List component="nav">
        <ListItem>
          <Avatar className={classes.pinkAvatar}>
            <MoodIcon/>
          </Avatar>
          <ListItemText classes={{
              primary: classes.primary
            }} primary="Mood"/>
          <FormControl className={classes.formControl}>
            <Select value={this.state.mood} onChange={this.handleChange.bind(this, 'mood')} input={<Input id = "select-multiple" />} MenuProps={MenuProps}>
              {
                selectObj.mood.map(mood => (<MenuItem key={mood} value={mood} style={{
                    fontWeight: this.state.mood.indexOf(mood) === -1
                      ? theme.typography.fontWeightRegular
                      : theme.typography.fontWeightMedium
                  }}>
                  {mood}
                </MenuItem>))
              }
            </Select>
          </FormControl>
        </ListItem>

        <Divider/>

        <ListItem>
          <Avatar className={classes.blueAvatar}>
            <WorkIcon/>
          </Avatar>
          <ListItemText classes={{
              primary: classes.primary
            }} primary="Work"/>
          <FormControl className={classes.formControl}>
            <Select value={this.state.work} onChange={this.handleChange.bind(this, 'work')} input={<Input id = "select-multiple" />} MenuProps={MenuProps}>
              {
                selectObj.work.map(work => (<MenuItem key={work} value={work} style={{
                    fontWeight: this.state.work.indexOf(work) === -1
                      ? theme.typography.fontWeightRegular
                      : theme.typography.fontWeightMedium
                  }}>
                  {work}
                </MenuItem>))
              }
            </Select>
          </FormControl>
        </ListItem>

        <Divider/>

        <ListItem>
          <Avatar className={classes.brownAvatar}>
            <LocalCafeIcon/>
          </Avatar>
          <ListItemText classes={{
              primary: classes.primary
            }} primary="Diet"/>
          <FormControl className={classes.formControl}>
            <Select value={this.state.diet} onChange={this.handleChange.bind(this, 'diet')} input={<Input id = "select-multiple" />} MenuProps={MenuProps}>
              {
                selectObj.diet.map(diet => (<MenuItem key={diet} value={diet} style={{
                    fontWeight: this.state.diet.indexOf(diet) === -1
                      ? theme.typography.fontWeightRegular
                      : theme.typography.fontWeightMedium
                  }}>
                  {diet}
                </MenuItem>))
              }
            </Select>
          </FormControl>
        </ListItem>

        <Divider/>

        <ListItem>
          <Avatar className={classes.indigoAvatar}>
            <Brightness2Icon/>
          </Avatar>
          <ListItemText classes={{
              primary: classes.primary
            }} primary="Sleep"/>
          <FormControl className={classes.formControl}>
            <Select value={this.state.sleep} onChange={this.handleChange.bind(this, 'sleep')} input={<Input id = "select-multiple" />} MenuProps={MenuProps}>
              {
                selectObj.sleep.map(sleep => (<MenuItem key={sleep} value={sleep} style={{
                    fontWeight: this.state.diet.indexOf(sleep) === -1
                      ? theme.typography.fontWeightRegular
                      : theme.typography.fontWeightMedium
                  }}>
                  {sleep}
                </MenuItem>))
              }
            </Select>
          </FormControl>
        </ListItem>
      </List>
    </div>)
  }
}

export default Today
