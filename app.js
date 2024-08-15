// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SettingsPage from './SettingsPage';
import DataUploadPage from './DataUploadPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SettingsPage} />
        <Route path="/data-upload" component={DataUploadPage} />
      </Switch>
    </Router>
  );
};

export default App;