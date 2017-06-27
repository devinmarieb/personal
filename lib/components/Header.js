import React, { Component } from 'react'


export default class Header extends Component{
  constructor() {
    super()
    this.state= {}
  }

  scrollToContact() {
    window.scrollTo(0,document.body.scrollHeight);
  }

  render() {
    return (
      <section className='header header-container'>
        <div className='title'>Header</div>
        <aside className='button-container'>
          <div className='buttonOne'>Section One</div>
          <div className='buttonTwo'>Section Two</div>
          <div className='buttonThree' onClick={this.scrollToContact.bind(this)}>Contact Me</div>
        </aside>
      </section>
    )
  }
}
