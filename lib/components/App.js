import React, { Component } from 'react'
import Header from './Header'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import Footer from './Footer'

import '../../styles/reset.css'
import '../../styles/styles.scss'


export default class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <section>
        <Header />
        <SectionOne />
        <SectionTwo />
        <Footer />
      </section>
    )
  }
}
