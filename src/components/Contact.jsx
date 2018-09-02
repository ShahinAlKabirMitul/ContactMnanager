import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Contact extends Component {
  state = {
    showContactInfo: false
  }
  onShowDown = e => {
    this.setState({showContactInfo:!this.state.showContactInfo})
  };
  onDeleteClick = () => {
    this.props.deleteClickHandler();
  }
  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name} <i onClick={this.onShowDown} style={{ cursor: 'pointer' }} className="fas fa-sort-down" />
          <i className="fas fa-times" onClick={this.onDeleteClick} style={{cursor:'pointer',float:'right',color:'red'}} ></i>
        </h4>
        {showContactInfo &&
          <ul className="list-group">
            <li className="list-group-item">Email : {email}</li>
            <li className="list-group-item">Phone : {phone}</li>
          </ul>
        }
      </div>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};
export default Contact;
