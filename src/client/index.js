import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Root from './Root';

ReactDOM.hydrate(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
  document.getElementById('app')
);
