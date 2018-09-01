import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager"/>
        <div className="containter">
          <Contact name="Mitul" email="mitul.cse@gmail.com" phone="01717785417"/>
          <Contact name="Bob" email="bob.cse@gmail.com" phone="888-5656-4646"/>
        </div>
        
      </div>
    );
  }
}

export default App;
