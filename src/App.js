import React from 'react';
import './App.css';

import Home from './pages/Home';
import Places from './pages/Places';
import SinglePlace from './pages/SinglePlace';
import Error from './pages/Error';

import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/places/" component={Places} />
        <Route exact path="/places/:slug" component={SinglePlace} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
