import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider'

import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItem from '@material-ui/core/ListItem'

import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';

import Brightness3Icon from '@material-ui/icons/Brightness3'
import WorkIcon from '@material-ui/icons/Work'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun'
import AccessibilityIcon from '@material-ui/icons/Accessibility'

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
  }
});

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

@withStyles(styles, {withTheme: true})
class BodyCheck extends React.Component {
  state = {
    mood: 'Not bad',
    work: 'Satisfying',
    diet: 'Satisfying',
    sleep: 'Not bad'
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <List subheader={<ListSubheader className="b" disableSticky>Body Check</ListSubheader>}>
          <ListItem>
            <TextField
              className={classes.margin}
              id="input-with-icon-textfield"
              placeholder="Sleep Time (h)"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Brightness3Icon />
                  </InputAdornment>
                ),
              }}
            />
          </ListItem>

          <ListItem>
            <TextField
              className={classes.margin}
              placeholder="Work Time (h)"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <WorkIcon />
                  </InputAdornment>
                ),
              }}
            />
          </ListItem>

          <ListItem>
            <TextField
              className={classes.margin}
              placeholder="Sport Time (h)"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DirectionsRunIcon />
                  </InputAdornment>
                ),
              }}
            />
          </ListItem>

          <ListItem>
            <TextField
              className={classes.margin}
              placeholder="Weight (kg)"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccessibilityIcon />
                  </InputAdornment>
                ),
              }}
            />
          </ListItem>

          {/*<ListItem>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.jason}
                  onChange={this.handleChange('jason')}
                  value="Sport"
                />
              }
              label="Do sports ?"
            />
          </ListItem>*/}

        </List>
        <Divider/>
      </div>
    );
  }
}


export default BodyCheck
