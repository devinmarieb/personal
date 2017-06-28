import React, { Component } from 'react'


export default class Footer extends Component{
  constructor() {
    super()
    this.state= {}
  }

  render() {
    return (
      <section className='footer'>
        <p className='hired'>Always looking to make connections!</p>
        <aside className='social-container'>
          <a href='https://www.linkedin.com/in/devin-beliveau-2126448' target='blank'><img className='social' src='./images/linkedin.png' /></a>
          <a href='https://github.com/devinmarieb' target='blank'><img className='social' src='./images/github.png' /></a>
          <a href='mailto:devinmarieb@gmail.com'><img className='social' src='./images/email.png' /></a>
          <a href='https://medium.com/@devinmarieb' target='blank'><img className='social' src='./images/medium.ico' /></a>
        </aside>
      </section>
    )
  }
}
