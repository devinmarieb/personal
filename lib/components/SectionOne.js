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
          <p className='overlay-text'>ipa enthusiast</p>
          <div className='profile-pic'></div>
        </aside>
        <img className='cover-image' src='./images/largeimage.jpg'/>
      </section>
    )
  }
}
