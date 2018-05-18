import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Invite from './Invite';

const store = configureStore([
    thunk,
])();

describe('Invite', () => {

  const invite = shallow(<Invite store={store} />).dive()

  it('renders', () => {
    expect(invite).toMatchSnapshot()
  })

  it('initializes the state with empty string of name and email', () => {
    expect(invite.state().name).toEqual('')
    expect(invite.state().email).toEqual('')
  })

  describe('when typing in to name input', () => {

    const name = 'Aimar'
    const id = 'name'

    beforeEach(() => {
      invite.find('.input-name').simulate('change', { target: { value: name, id: id }})
    })

    it('updates the name in `state`', () => {
      expect(invite.state().name).toEqual(name)
    })
  })

  describe('when typing in to email input', () => {

    const email = 'aimar@snapit.ee'
    const id = 'email'

    beforeEach(() => {
      invite.find('.input-email').simulate('change', { target: { value: email, id: id }})
    })

    it('updates the email in `state`', () => {
      expect(invite.state().email).toEqual(email)
    })

  })

})
