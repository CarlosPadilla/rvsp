import * as types from '../actions/types';
import reducer from './inviteReducer';

describe('invite reducer', () => {

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  it('should handle SEND_INVITE_START', () => {
    const startAction = {
      type: types.SEND_INVITE_START
    }

    expect(reducer({}, startAction)).toEqual({ error: null, loading: true})
  })

  it('should handle SEND_INVITE_SUCCESS', () => {
    const successAction = {
      type: types.SEND_INVITE_SUCCESS,
    }

    expect(reducer(null, successAction)).toEqual({ loading: false, success: true })
  })

  it('should handle SEND_INVITE_FAIL', () => {
    const failAction = {
      type: types.SEND_INVITE_FAIL,
      error: { response: { data: 'uups'} }
    }

    expect(reducer(null, failAction)).toEqual({"error": "uups", "success": false})
  })

})
