import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import * as serviceWorker from './serviceWorker';

//引入全局样式
import './style';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)

serviceWorker.unregister();
