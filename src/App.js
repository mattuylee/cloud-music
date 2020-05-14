import React from 'react';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import routeConfig from './routes/index.js';
import store from './store/index.js';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        {renderRoutes(routeConfig)}
      </HashRouter>
    </Provider>
  );
}

export default App;
