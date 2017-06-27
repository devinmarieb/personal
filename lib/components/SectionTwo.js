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
          <div className='about'>
            <p className='quote'> Collecting facts is important. Knowledge is important.
                But if you don't have an imagination to use the knowledge,
                civilization is nowhere. - Ray Bradbury
            </p>
          </div>
          <div className='about'>
            <img className='school-logo' src='./images/turing.png' />
            <p className='school-text'>Turing School of Software & Design</p>
            <p className='school-text-maj'>Front End Engineering</p>
            <img className='school-logo' src='./images/champlain.png' />
            <p className='school-text'>Champlain College</p>
            <p className='school-text-maj'>Writing and Communication</p>
          </div>
        </aside>
        <img className='beach-image' src='./images/largeimage.jpg' />
      </section>
    )
  }
}
