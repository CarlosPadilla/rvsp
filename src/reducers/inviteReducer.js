import * as types from '../actions/types';

const invite = (state = {}, action) => {
  switch (action.type) {
    case types.SEND_INVITE:
      return action.invite;
    default:
      return state;
  }
};

export default invite;
