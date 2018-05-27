import React from 'react'
import PropTypes from 'prop-types'
import './header.scss'
import back from '@/assets/back.png'

class Header extends React.Component {
  render () {
    return (
      <div className="header f">
        <div className="back">
          <img src={back} />
        </div>
        <div className="title f ac jc">
          HEADER
        </div>
        <div className="tool f ac jc">
          save
        </div>
      </div>
    );
  }
}

export default Header
