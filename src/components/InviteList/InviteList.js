import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './InviteListItem';

const InviteList = props => (
  <div>
    {
      props.invites.map(invite => <ListItem key={invite.id} invite={invite} />)
    }
  </div>
);

InviteList.propTypes = {
  invites: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  })).isRequired,
};

export default InviteList;
