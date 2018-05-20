import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as actions from '../actions/invite';
import { maxNumber } from '../helpers';
import InviteList from '../components/InviteList/InviteList';
import Input from '../components/Input/Input';
import Title from '../components/PageTitle/PageTitle';
import Form from '../components/Form/Body';
import Button from '../components/Button/Button';

class Invite extends Component {
  state = {
    name: '',
    email: '',
    invites: [],
    errors: {},
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  onSendHandler = () => {
    if (this.handleValidation()) {
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
  }

  handleValidation = () => {
    const { name, email } = this.state;
    const errors = {};

    let formIsValid = true;

    if (!name) {
      formIsValid = false;
      errors.name = 'Palun sisesta nimi';
    }

    if (typeof name !== 'undefined') {
      if (!name.match(/^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/g)) {
        formIsValid = false;
        errors.name = 'Nimi peab sisaldama ainult tähti';
      }
    }

    if (!email) {
      formIsValid = false;
      errors.email = 'Palun sisesta email';
    }

    if (typeof email !== 'undefined') {
      const lastAtPos = email.lastIndexOf('@');
      const lastDotPos = email.lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
        formIsValid = false;
        errors.email = 'Palun sisesta korrektne emaili aadress';
      }
    }

    if (this.props.error.email) {
      formIsValid = false;
      errors.email = this.props.error.email;
    }

    this.setState({ errors });
    return formIsValid;
  };

  render() {
    const { name, email, errors } = this.state;
    // console.log(this.props);
    return (
      <Wrapper>
        <Title>Saada kutse</Title>
        <Form>
          <div>
            <Input
              label="Email"
              field="email"
              type="email"
              value={email}
              validate={this.validateEmailField}
              onChange={this.onInputChange}
              error={errors.email}
            />
          </div>
          <div>
            <Input
              label="Nimi"
              field="name"
              type="text"
              value={name}
              onChange={this.onInputChange}
              error={errors.name}
            />
          </div>
          <Alert>
            {
              !this.props.loading ? this.props.error.email : null
            }
          </Alert>
          <Button onClick={this.onSendHandler}>
            Saada
          </Button>
        </Form>
        <div>
          {
            this.props.success
              ? <InviteList invites={this.state.invites} />
              : null
          }
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  max-width: 600px;
  margin: auto;
  background-color: #fff;
`;

const Alert = styled.div`
  width: 100%;
  text-align: center;
  color: #EF476F;
  margin-bottom: 16px;
`;

const mapStateToProps = state => ({
  error: state.invite.error,
  success: state.invite.success,
  loading: state.invite.loading,
});

const mapDispatchToProps = dispatch => ({
  onSend: invite => dispatch(actions.sendInvite(invite)),
  validateEmail: email => dispatch(actions.validateEmail(email)),
});

Invite.defaultProps = {
  error: {},
  success: false,
  loading: false,
};

Invite.propTypes = {
  onSend: PropTypes.func.isRequired,
  error: PropTypes.shape({ email: PropTypes.string }),
  success: PropTypes.bool,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(Invite);
