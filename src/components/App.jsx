import React from 'react';
import { Router } from 'react-router-dom';
import history from '../shared/history';
import AppRoutes from '../shared/routes/AppRoutes';

const App = () => (
  <Router history={history}>
    <div>
      <AppRoutes />
    </div>
  </Router>
);

export default App;
