import React, { Component } from 'react'


export default class SectionTwo extends Component{
  constructor() {
    super()
    this.state= {}
  }

  render() {
    return (
      <section>
        <aside className='about-container'>
          <div className='about'></div>
          <div className='about'></div>
          <div className='about'></div>
        </aside>
        <img className='beach-image' src='./images/beachimage.jpg' />
      </section>
    )
  }
}
