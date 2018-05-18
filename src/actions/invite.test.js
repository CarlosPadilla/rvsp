import * as types from './types';
import * as actions from './invite';

describe('Invite actions', () => {
  it('sends an invite', () => {
    const invite = { name: 'Aimar', email: 'aimar@snapit.ee' }
    const expectedAction = { type: types.SEND_INVITE, invite }
    expect(actions.sendInvite(invite)).toEqual(expectedAction)
  })
})
