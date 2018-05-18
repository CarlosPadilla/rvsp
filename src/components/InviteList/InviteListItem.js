import React from 'react';
import PropTypes from 'prop-types';

const InviteListItem = props => (
  <div>
    <div>{props.invite.id}</div>
    <div>{props.invite.name}</div>
    <div>{props.invite.email}</div>
  </div>
);

InviteListItem.propTypes = {
  invite: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default InviteListItem;
