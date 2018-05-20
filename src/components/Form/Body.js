import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 100%;
  padding: 16px;
`;

const FormBody = props => (
  <Wrapper>{props.children}</Wrapper>
);

FormBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormBody;
