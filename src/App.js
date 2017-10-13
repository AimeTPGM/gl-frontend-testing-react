import React, { Component } from 'react'
import logo from './logo.svg'

import './App.css'
import './css/bootstrap.min.css'
import './css/font-awesome.css'
import './css/style.css'

import Header from './Header'
import Intro from './Intro'
import Content from './Content'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Intro />
        <Content />
        <Footer />
      </div>
      
    );
  }
}

export default App;
