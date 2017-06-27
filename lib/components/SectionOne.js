import React, { Component } from 'react'


export default class SectionOne extends Component{
  constructor() {
    super()
    this.state= {}
  }

  render() {
    return (
      <section className='sectionOne'>
        <aside className='overlay-text-container'>
          <p className='overlay-text'>front end developer</p>
          <p className='overlay-text'>new england &#8608; colorado</p>
          <p className='overlay-text'>world traveler</p>
          <p className='overlay-text'>ipa enthusiast</p>
          <img className='profile-pic' src='./images/me.png' />
        </aside>
        <img className='cover-image' src='./images/beachimage.jpg'/>
      </section>
    )
  }
}
