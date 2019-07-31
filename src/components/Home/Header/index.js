import React, { Component } from 'react';
import './index.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="shop">
            <p>ALOEALFA.COM</p>
        </div>
        <div className="menu">
            <div>
                <p>Home</p>
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
        </div>
      </div>
    );
  }
}

export default Header;
