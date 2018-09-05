import React, { Component } from 'react'

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone:''
  }
  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div> 
        <div className="card-body">
          <form >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text"
                name="name"
                className="form-control form-control-lg"
                value={name}
                placeholder="Enter Name ..." />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email"
                name="email"
                value={email}
                className="form-control form-control-lg"
                placeholder="Enter email ..." />
            </div>
            <div className="form-group">
              <label htmlFor="Phone">Phone</label>
              <input type="text"
                name="phone"
                value={phone}
                className="form-control form-control-lg"
                placeholder="Enter Phone ..." />
            </div>
            <input type="submit" value="Add Contact" className="btn btn-light btn-block"/>
          </form>
        </div>
      </div>
    )
  }
}

export default AddContact;