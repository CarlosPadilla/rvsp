import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions/invite';
import { maxNumber } from '../helpers';
import InviteList from '../components/InviteList/InviteList';

class Invite extends Component {
  state = {
    name: '',
    email: '',
    invites: [],
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  onSendHandler = (event) => {
    event.preventDefault();
    const { invites } = this.state;
    const send = {
      id: maxNumber(this.state.invites.map(invite => invite.id)) + 1,
      name: this.state.name,
      email: this.state.email,
    };
    invites.push(send);
    this.props.onSend({ email: this.state.email, name: this.state.name });
    this.setState({ name: '', email: '' });
  }

  render() {
    return (
      <div>
        <h1>Invite</h1>
        <div>
          <label>Nimi</label>
          <input id="name" className="input-name" type="text" value={this.state.name} onChange={this.onInputChange} />
        </div>
        <div>
          <label>Email</label>
          <input id="email" className="input-email" type="email" value={this.state.email} onChange={this.onInputChange} />
        </div>
        <button onClick={this.onSendHandler}>Saada kutse!</button>
        <div>
          <InviteList invites={this.state.invites} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  invites: state.invites,
});

const mapDispatchToProps = dispatch => ({
  onSend: invite => dispatch(actions.sendInvite(invite)),
});

Invite.propTypes = {
  onSend: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Invite);
