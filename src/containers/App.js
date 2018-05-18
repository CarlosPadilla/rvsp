import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../containers/Landing';
import Invite from '../containers/Invite';
import Rvsp from '../containers/Rvsp';

const App = () => (
  <div>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/invite" exact component={Invite} />
      <Route path="/Rvsp" exact component={Rvsp} />
    </Switch>
  </div>
);

export default App;
