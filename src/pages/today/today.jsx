import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import pink from '@material-ui/core/colors/pink'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import FavoriteIcon from '@material-ui/icons/Favorite';
import DraftsIcon from '@material-ui/icons/Drafts';
import InputLabel from '@material-ui/core/InputLabel';

import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
  pinkAvatar: {
    color: '#fff',
    backgroundColor: pink[500]
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

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder'
];

class Today extends React.Component {
  state = {
    name: [],
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    const {classes, theme} = this.props
    console.log(theme)
    return (<div className="App">
      <List component="nav">
        <ListItem>
          <Avatar className={classes.pinkAvatar}>
            <FavoriteIcon/>
          </Avatar>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="select-multiple">Name</InputLabel>
            <Select value={this.state.name} onChange={this.handleChange} input={<Input id = "select-multiple" />} MenuProps={MenuProps}>
              {
                names.map(name => (<MenuItem key={name} value={name} style={{
                    fontWeight: this.state.name.indexOf(name) === -1
                      ? theme.typography.fontWeightRegular
                      : theme.typography.fontWeightMedium
                  }}>
                  {name}
                </MenuItem>))
              }
            </Select>
          </FormControl>
        </ListItem>
        <Divider/>

        <ListItem>
          <ListItemText primary="Spam"/>
        </ListItem>
      </List>
    </div>)
  }
}

export default withStyles(styles, { withTheme: true })(Today)
