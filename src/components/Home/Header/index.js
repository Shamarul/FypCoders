import React, { Component } from 'react';
import './index.css';

import { connect } from 'react-redux';
import { signOut } from '../../../actions/AuthActions';
// import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

const iconStyle = {
    color: 'white'
}

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
            <div onClick={this.props.signOut} >
                {/* <Icon color='disabled' style={iconStyle}>
                                power_settings_new
                </Icon> */}
                <p>Log Out</p>
                {/* <Button onClick={this.props.signOut} variant="contained" color="primary">
                    Hello World
                </Button> */}
            </div>
        </div>
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
