import React, { Component } from 'react';
import './App.css';
import Home from '../components/Home';
// import Auth from '../components/Auth/';
import login from '../components/Auth/Login'
import signup from '../components/Auth/Signup'
import Header from '../components/Home/Header'
import product from '../components/Product';
import about from '../components/About';
import contact from '../components/Contact';
import additem from '../components/Additem';
import BgImg from '../assets/img/fypbg.jpeg';
import { connect } from 'react-redux';

import { signOut } from '../actions/AuthActions';

import { BrowserRouter, Route, Link } from 'react-router-dom';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

class App extends Component {

  render() {
    return (
      <div className="wrapper" style={{backgroundImage: `url(${BgImg})`, height: '100%', 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover', }}>
        <BrowserRouter>

          <div className="Header">
            <div className="shop">
                <h1><Link to="/" >ALOEALFA.COM</Link></h1>
            </div>
            <div className="menu">
                <div>
                    <p><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></p>
                </div>
                <div>
                    <p><Link to="/product" style={{ textDecoration: 'none' }}>Product</Link></p>
                </div>
                <div>
                    <p><Link to="/about" style={{ textDecoration: 'none' }}>About</Link></p>
                </div>
                <div>
                    <p><Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link></p>
                </div>
            </div>
            <div className="setting">
                <div>
                  {this.props.auth.uid&&
                    <p><AccountCircleOutlinedIcon style={{color:'gray', fontSize:33}}/></p>
                  }
                </div>
                <div>
                  {this.props.auth.uid&&
                    <p><ShoppingCartOutlinedIcon style={{color:'gray', fontSize:30}}/></p>
                  }
                </div>
                <div>
                  {this.props.auth.uid?
                    <div>
                    <p>Your are logged in as {this.props.role}</p>
                    <p>Welcome Back {this.props.displayName}.</p>
                    <p onClick={()=>{this.props.signOut();}}>Sign Out</p>
                    </div>
                  :
                    <p><Link to="/login" style={{ textDecoration: 'none' }}>Login</Link></p>
                  }
                </div>
                <div>
                  {!this.props.auth.uid&&<p>|</p>}
                </div>
                <div>
                  {!this.props.auth.uid&&
                    <p><Link to="/signup" style={{ textDecoration: 'none' }}>Sign Up</Link></p>
                  }
                </div>
            </div>
          </div>

          <div className="bodyContent">
            <Route path='/login' component={login} />
            <Route path='/signup' component={signup} />
            <Route path='/product' component={product} />
            <Route path='/about' component={about} />
            <Route path='/contact' component={contact} />
            <Route path='/additem' component={additem} />
            <Route path='/' component={Home} exact/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  console.log('mapStateToProps', state)
  return {
      authError: state.auth.authError,
      auth: state.firebase.auth,
      displayName: state.firebase.profile.displayName,
      role: state.firebase.profile.role,
      adminId: state.firebase.profile.adminid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
