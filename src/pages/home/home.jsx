import React from 'react'
// import PropTypes from 'prop-types'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'

import './home.scss'

class Home extends React.Component {
  render () {
    return (
      <div className="App">
        <Header title="HOME"></Header>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home
