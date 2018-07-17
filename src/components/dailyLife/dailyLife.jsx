import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import pink from '@material-ui/core/colors/pink'
import blue from '@material-ui/core/colors/blue'
import brown from '@material-ui/core/colors/brown'
import indigo from '@material-ui/core/colors/indigo'

import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

import Input from '@material-ui/core/Input'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

import MoodIcon from '@material-ui/icons/Mood'
import WorkIcon from '@material-ui/icons/Work'
import LocalCafeIcon from '@material-ui/icons/LocalCafe'
import Brightness2Icon from '@material-ui/icons/Brightness2'

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
      width: 250,
    },
  },
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
class DailyLife extends React.Component {
  static defaultProps={
    select: true,
  }

  state = {
    mood: 'Not bad',
    work: 'Satisfying',
    diet: 'Satisfying',
    sleep: 'Not bad'
  };

  handleChange = (type, event) => {
    this.setState({[type]: event.target.value});
  };

  renderSelect(value) {
    let { classes, select, theme } = this.props;
    let avatar = '';
    if (value === 'mood') {
      avatar = <Avatar className={classes.pinkAvatar}>
        <MoodIcon/>
      </Avatar>
    } else if (value === 'work') {
      avatar = <Avatar className={classes.blueAvatar}>
        <WorkIcon/>
      </Avatar>
    } else if (value === 'diet') {
      avatar = <Avatar className={classes.brownAvatar}>
        <LocalCafeIcon/>
      </Avatar>
    } else if (value === 'sleep') {
      avatar = <Avatar className={classes.indigoAvatar}>
        <Brightness2Icon/>
      </Avatar>
    }
    return (
      <ListItem>
        {avatar}
        <ListItemText classes={{
            primary: classes.primary
        }} primary={value.substring(0,1).toUpperCase() + value.substring(1)}/>

        {this.props.select ?
          <FormControl className={classes.formControl}>
            <Select value={this.state[value]} onChange={this.handleChange.bind(this, value)} input={<Input id = "select-multiple" />} MenuProps={MenuProps}>
              {
                selectObj[value].map(val => (<MenuItem key={val} value={val} style={{
                  fontWeight: this.state.mood.indexOf(val) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium
                }}>
                  {val}
                </MenuItem>))
              }
            </Select>
          </FormControl>
        :
        <ListItemText primary="Drafts" />
        }

      </ListItem>
    )
  };

  render() {
    const { classes, select, theme } = this.props;
    return (
      <div>
        <List subheader={<ListSubheader disableSticky>Daily Life</ListSubheader>}>
          {this.renderSelect('mood')}
          <Divider inset/>

          {this.renderSelect('work')}

          <Divider inset/>

          {this.renderSelect('diet')}

          <Divider inset/>

          {this.renderSelect('sleep')}

        </List>
        <Divider/>
      </div>
    );
  }
}


export default DailyLife
