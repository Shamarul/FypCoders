import React, { Component } from 'react';
import './App.css';
import Home from '../components/Home';
// import Auth from '../components/Auth/';
import login from '../components/Auth/Login'
import signup from '../components/Auth/Signup'
import Header from '../components/Home/Header'
import BgImg from '../assets/img/fypbg.jpeg'

import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      // <div className="signup" style={{backgroundImage: `url(${BgImg})`, height: '100%', 
      // backgroundPosition: 'center',
      // backgroundRepeat: 'no-repeat',
      // backgroundSize: 'cover'}}>
      <div>
        <BrowserRouter>

        <div className="Header">
        <div className="shop">
            <p>ALOEALFA.COM</p>
        </div>
        <div className="menu">
            <div>
                <p><Link to="/">Home</Link></p>
            </div>
            <div>
                <p>Product</p>
            </div>
            <div>
                <p>About</p>
            </div>
            <div>
                <p>Contact</p>
            </div>
        </div>
        <div className="setting">
            <div>
                <p>Account</p>
            </div>
            <div>
                <p>Shop</p>
            </div>
            <div>
              <p><Link to="/login">Login</Link></p>
            </div>
            <div>
              <p><Link to="/signup">Sign Up</Link></p>
            </div>
        </div>
      </div>

          <div className='wrapper'>
            <Route path='/login' component={login} />
            <Route path='/signup' component={signup} />
            <Route path='/' component={Home} exact/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
