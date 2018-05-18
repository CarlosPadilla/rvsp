import * as types from './types';

export const sendInvite = (invite) => {
  return {
    type: types.SEND_INVITE,
    invite,
  };
};
