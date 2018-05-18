import * as types from '../actions/types';
import reducer from './inviteReducer';

describe('invite reducer', () => {

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  it('should handle SEND_INVITE', () => {
    const invite = { name: 'Aimar', email: 'aimar@snapit.ee' }
    const startAction = {
      type: types.SEND_INVITE,
      invite
    }

    expect(reducer(null, startAction)).toEqual(invite)
  })

  // it('sends an invite', () => {
  //
  //   const invite = { name: 'Aimar', email: 'aimar@snapit.ee' }
  //
  //   expect(inviteReducer(null, { type: types.SEND_INVITE, invite})).toEqual(invite)
  // })
  //
  // it('returns default state if there\'s no action type provided', () => {
  //   expect(inviteReducer(null, { type: types.TEST })).toEqual(null)
  // })
})
