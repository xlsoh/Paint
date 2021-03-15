import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './components/Main';
import Paint from './components/Paint';
import Rooms from './components/Rooms';
function App() {
  return (
    <div style={{ padding: 30, border: '6px solid #6495ED' }}>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/paint' component={Paint} />
        <Route exact path='/rooms' component={Rooms} />
      </Switch>
    </div>
  );
}

export default App;
