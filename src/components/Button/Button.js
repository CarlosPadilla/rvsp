import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  background-color: #06D6A0;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 8px;
  border: 0;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const PrimaryBtn = props =>
  <Button onClick={props.onClick}>{props.children}</Button>;

// PrimaryBtn.defaultProps = {
//   disabled: '',
// };

PrimaryBtn.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PrimaryBtn;
