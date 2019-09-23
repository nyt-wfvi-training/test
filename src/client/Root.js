import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/App';

function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default hot(Root);
