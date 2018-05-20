import * as types from '../actions/types';
import { updateObject } from '../helpers';

const startSending = state => updateObject(state, { error: null, loading: true });
const sendSuccess = state => updateObject(state, { loading: false, success: true });
const sendFail = (state, action) =>
  updateObject(state, { error: action.error.response.data, success: false });

const invite = (state = {}, action) => {
  switch (action.type) {
    case types.SEND_INVITE_START:
      return startSending(state, action);
    case types.SEND_INVITE_SUCCESS:
      return sendSuccess(state, action);
    case types.SEND_INVITE_FAIL:
      return sendFail(state, action);
    default:
      return state;
  }
};

export default invite;
