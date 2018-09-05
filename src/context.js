import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts:state.contacts.filter(s=>s.id !== action.payload)
      }
    default:
      return state;
  }
}

export class Provider extends Component{
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
    ],
    dispatch: action => this.setState(state => reducer(state,action))
  }
  render() {
    return (
      <Context.Provider value={this.state}>
      {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;