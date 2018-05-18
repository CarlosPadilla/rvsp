import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions/invite';
import { maxNumber } from '../helpers';
import InviteList from '../components/InviteList/InviteList';
import Input from '../components/Input/Input';

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

  onSendHandler = () => {
    const { invites } = this.state;
    const send = {
      id: maxNumber(invites.map(invite => invite.id)) + 1,
      name: this.state.name,
      email: this.state.email,
    };
    invites.push(send);
    this.props.onSend(send);
    this.setState({ name: '', email: '' });
  }

  render() {
    return (
      <div>
        <h1>Saada kutse</h1>
        <div>
          <Input
            label="Nimi"
            field="name"
            className="input-name"
            type="text"
            value={this.state.name}
            onChange={this.onInputChange}
          />
        </div>
        <div>
          <Input
            label="Email"
            field="email"
            className="input-email"
            type="email"
            value={this.state.email}
            onChange={this.onInputChange}
          />
        </div>
        <button className="btn-send" onClick={this.onSendHandler}>Saada</button>
        <div>
          {
            this.state.invites.length !== 0 ? <InviteList invites={this.state.invites} /> : null
          }
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
