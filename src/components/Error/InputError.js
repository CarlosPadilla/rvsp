import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Error = styled.div`
  color: #EF476F;
  font-size: 14px;
`;

const InputError = props => (
  <Error>{props.children}</Error>
);

InputError.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InputError;
