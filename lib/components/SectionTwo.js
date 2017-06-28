import React, { Component } from 'react'


export default class SectionTwo extends Component{
  constructor() {
    super()
    this.state= {}
  }

  render() {
    return (
      <section className='section-two'>
        <aside className='about-container'>
          <div className='about'>
            <p className='currently-looking'>Having just finished my program at Turing,
              I'm looking to work for a company located in either Boulder or Denver.
              Feel free to reach out if you'd like to chat!
            </p>
            <a href='https://devinmarieb.github.io/portfolio/' target='blank'><p className='portfolio'>Click here for my portfolio site</p></a>
            <p className='location'>Where am I now?</p>
            <p className='location'>I happily live in Golden, Colorado</p>
          </div>
          <div className='about'>
            <p className='top-quote'>&#10077;</p>
            <p className='quote'> Collecting facts is important. Knowledge is important.
                But if you don't have an imagination to use the knowledge,
                civilization is nowhere. - Ray Bradbury
            </p>
            <p className='bottom-quote'>&#10078;</p>
          </div>
          <div className='about'>
            <a href='https://www.turing.io/' target='blank'><img className='school-logo' src='./images/turing.png' /></a>
            <a href='https://www.turing.io/' target='blank'><p className='school-text'>Turing School of Software & Design</p></a>
            <p className='school-text-maj'>Front End Engineering</p>
            <a href='http://www.champlain.edu/' target='blank'><img className='school-logo' src='./images/champlain.png' /></a>
            <a href='http://www.champlain.edu/' target='blank'><p className='school-text'>Champlain College</p></a>
            <p className='school-text-maj'>Writing and Communication</p>
          </div>
        </aside>
        <img className='beach-image' src='./images/largeimage.jpg' />
      </section>
    )
  }
}
