import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts:[
      {
        id:1,
        name:'Mitul',
        email:'mitul.cse@gmail.com',
        phone:'01717785417'
      },
      {
        id:2,
        name:'Asha',
        email:'asha@gmail.com',
        phone:'0177785417'
      },
      {
        id:3,
        name:'Joti',
        email:'joti@gmail.com',
        phone:'01717785417'
      },
      
    ]
  }
  render() {
    const {contacts} = this.state;
    return (
      <React.Fragment>
         {contacts.map(contact=> <Contact key={contact.id} contact={contact} />)}
      </React.Fragment>
    )
  }
}
export default Contacts;
