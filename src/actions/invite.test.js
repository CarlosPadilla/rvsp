import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as types from './types';
import * as actions from './invite';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('Invite actions', () => {

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('creates SEND_INVITE_SUCCESS after successfully sends an invite', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { token: "90c989bcca3416071c230d786bb1cd6eed62daab8600e4cd" },
      });
    });

    // moxios.stubRequest('http://localhost:5000/api/invites', {
    //   status: 204,
    //   response: { data: '' },
    // });

    const expectedActions = [
      // { type: types.SEND_INVITE_START },
      { type: types.SEND_INVITE_SUCCESS, token: "90c989bcca3416071c230d786bb1cd6eed62daab8600e4cd" }
    ]

    const store = mockStore({ invites: {} })

    return store.dispatch(actions.sendInvite()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })

  })
})
