import React, { Component} from 'react'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Manny'
    }
  }
  render () {
    return (<header className="header">
      <div className="logo"><img src="img/zullia_logo.png"></img></div>
      <span className="zullia">Zullia Home Finder</span>
      <span className="zullia-sub">Discover a place you'll love to live</span>
      <nav>
        <a href="#">create ads</a>
        <a href="#">About Us</a>
        <a href="#">Log In</a>
        <a href="#" className="register-btn">Register</a>
      </nav>

       </header>)
  }
}
