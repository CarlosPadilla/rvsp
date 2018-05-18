import React from 'react';
import PropTypes from 'prop-types';

const Input = props => (
  <div>
    <label>{props.label}</label>
    <input
      id={props.field}
      className={props.className}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
    />
  </div>
);

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  field: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;
