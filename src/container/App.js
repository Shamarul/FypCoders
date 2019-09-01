import React, { Component } from 'react';
import './App.css';
import Home from '../components/Home';
// import Auth from '../components/Auth/';
import login from '../components/Auth/Login'
import signup from '../components/Auth/Signup'

import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='wrapper'>
          <Route path='/login' component={login} />
          <Route path='/signup' component={signup} />
          <Route path='/' component={Home} exact/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
