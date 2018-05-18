import * as types from '../actions/types';
import inviteReducer from './inviteReducer';

describe('invite reducer', () => {
  it('sends an invite', () => {

    const invite = { name: 'Aimar', email: 'aimar@snapit.ee' }

    expect(inviteReducer(null, { type: types.SEND_INVITE, invite})).toEqual(invite)
  })
})
