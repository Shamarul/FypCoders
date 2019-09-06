import React, { Component } from 'react';
import './index.css';

import { connect } from 'react-redux';
import { signOut } from '../../../actions/AuthActions';
// import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

import { BrowserRouter, Link } from 'react-router-dom';

const iconStyle = {
    color: 'white'
}

class Header extends Component {
    state = {
        login: false,
        signup: false,
    }

    render() {

    const { login, signup } = this.state;
        if (login) return <Redirect to='/login' />
        if (signup) return <Redirect to='/signup' />
        
    return (
        <div className="Header">
        <BrowserRouter>
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
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
