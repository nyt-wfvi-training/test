import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Post from '../routes/Post';

function App() {
  return (
    <main>
      <header>
        <h1>Test App</h1>
      </header>
      <Switch>
        <Route path="/post" component={Post} />
        <Route path="/" component={Home} />
      </Switch>
    </main>
  );
}

export default App;
