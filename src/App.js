import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from './context'
import './App.css';
import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
class App extends Component {
  render() {
    return (
      <Provider>
       <div className="App">
          <Header branding="Contact Manager"/>
          <div className="containter">
            <AddContact/>
            <Contacts/> 
          </div>
       </div>
      </Provider>
     
    );
  }
}

export default App;
