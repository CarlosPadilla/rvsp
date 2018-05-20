import * as types from '../actions/types';
import { updateObject } from '../helpers';

const startSending = state => updateObject(state, { error: null, loading: true });
const sendSuccess = state => updateObject(state, { loading: false, success: true });
const sendFail = (state, action) =>
  updateObject(state, { error: action.error.response.data, success: false, loading: false });

const startValidating = state => updateObject(state, { loading: true });
const validateSuccess = state => updateObject(state, { loading: false });
const validateError = (state, action) =>
  updateObject(state, {
    error: action.error.response.data.message,
    loading: false,
    success: false,
    validationError: action.error.response.status === 409,
  });

const invite = (state = {}, action) => {
  switch (action.type) {
    case types.SEND_INVITE_START:
      return startSending(state, action);
    case types.SEND_INVITE_SUCCESS:
      return sendSuccess(state, action);
    case types.SEND_INVITE_FAIL:
      return sendFail(state, action);
    case types.VALIDATE_EMAIL_START:
      return startValidating(state, action);
    case types.VALIDATE_EMAIL_SUCCESS:
      return validateSuccess(state, action);
    case types.VALIDATE_EMAIL_FAIL:
      return validateError(state, action);
    default:
      return state;
  }
};

export default invite;
