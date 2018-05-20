import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PageTitle = props => (
  <Wrapper>
    <h1>{props.children}</h1>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 16px;
`;

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTitle;
