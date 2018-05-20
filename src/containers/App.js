import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Landing from './Landing';
import Invite from './Invite';
import Rvsp from './Rvsp';
import NotFound from '../components/Error/NotFound';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #26547c
`;

const App = () => (
  <Wrapper>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/invite" exact component={Invite} />
      <Route path="/rvsp" exact component={Rvsp} />
      <Route component={NotFound} />
    </Switch>
  </Wrapper>
);

export default App;
