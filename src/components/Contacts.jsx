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
  deleteContact = (id) => {
    const {contacts} = this.state;
    
    const newContacts = contacts.filter(s => s.id !== id);
   
    this.setState({ contacts:newContacts });
  }
  render() {
    const {contacts} = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => <Contact key={contact.id} contact={contact}
          deleteClickHandler={ ()=> this.deleteContact(contact.id)} />)}
      </React.Fragment>
    )
  }
}
export default Contacts;
