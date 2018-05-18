import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../containers/Landing';
import Invite from '../containers/Invite';

const App = () => (
  <div>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/invite" exact component={Invite} />
    </Switch>
  </div>
);

export default App;
