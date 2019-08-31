import React, { Component } from 'react';
import './App.css';
import Home from '../components/Home';
import Login from '../components/Auth/Login';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='wrapper'>
          <Route path='/home' component={Home} />
          <Route path='/' component={Login} exact/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
