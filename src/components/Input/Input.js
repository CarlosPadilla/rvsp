import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Error from '../Error/InputError';

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`;

const TextInput = styled.input`
  padding: 8px;
  border: 1px solid #aaa;
  margin-bottom: 4px;
  border-radius: 4px;
  font-size: 16px;
`;

const Input = props => (
  <InputGroup>
    <Label>{props.label}</Label>
    <TextInput
      id={props.field}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      // onBlur={props.type === 'email' ? () => props.validate(props.value) : null}
    />
    {
      props.error ? <Error>{props.error}</Error> : null
    }
  </InputGroup>
);

Input.defaultProps = {
  value: '',
  error: '',
};

Input.propTypes = {
  field: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default Input;
