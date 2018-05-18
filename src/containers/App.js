import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './Landing';
import Invite from './Invite';
import Rvsp from './Rvsp';
import NotFound from '../components/Error/NotFound';

const App = () => (
  <div>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/invite" exact component={Invite} />
      <Route path="/rvsp" exact component={Rvsp} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
