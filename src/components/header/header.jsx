import React from 'react'
import PropTypes from 'prop-types'
import './header.scss'
import back from '@/assets/back.png'

class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render () {
    return (
      <div className="header f">
        <div className="back">
          <img src={back} alt="" />
        </div>
        <div className="title f ac jc">
          {this.props.title}
        </div>
        <div className="tool f ac jc">
          Save
        </div>
      </div>
    );
  }
}

export default Header
