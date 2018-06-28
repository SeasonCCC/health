import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { observer , inject } from 'mobx-react'

const styles = {
  root: {
    flexGrow: 1
  }
}

@inject('store')
@observer
@withStyles(styles)
class Header extends React.Component {
  render() {
    const {classes} = this.props
    return (<div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            {this.props.store.todos[0].title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>);
  }
}

// function SimpleAppBar(props) {
//
// }

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Header
