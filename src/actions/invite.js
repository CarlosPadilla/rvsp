import axios from 'axios';
import * as types from './types';

export const startSending = () => ({
  type: types.SEND_INVITE_START,
});

export const sendSuccess = response => ({
  type: types.SEND_INVITE_SUCCESS,
  response,
});

export const sendFail = error => ({
  type: types.SEND_INVITE_FAIL,
  error,
});

export const sendInvite = invite => async (dispatch) => {
  dispatch(startSending());
  try {
    const res = await axios.post('http://localhost:5000/api/invites', invite);
    dispatch(sendSuccess(res));
    // console.log(res);
  } catch (error) {
    dispatch(sendFail(error));
  }
};

export const startValidating = () => ({
  type: types.VALIDATE_EMAIL_START,
});

export const validateSuccess = response => ({
  type: types.VALIDATE_EMAIL_SUCCESS,
  response,
});

export const validateError = error => ({
  type: types.VALIDATE_EMAIL_FAIL,
  error,
});

export const validateEmail = email => async (dispatch) => {
  dispatch(startValidating());
  try {
    const res = await axios.post('http://localhost:5000/api/invites/validate', email);
    dispatch(validateSuccess(res));
  } catch (error) {
    dispatch(validateError(error));
  }
};
