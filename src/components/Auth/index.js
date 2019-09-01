import React, { Component } from 'react';
import './index.css';
import { Redirect, BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../../actions/AuthActions';

import Login from './Login';
import Signup from './Signup';

class Auth extends Component {
  state = {
    email: '',
    password: '',
    action: 'login',

    confirmPassword: '',
    displayName: '',
  }

  handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
      })
  }

  handleSubmit = (e) => {
      e.preventDefault();
      this.props.signIn(this.state);
  }

  render() {

    const { action } = this.state;
    const { authError , auth } = this.props;
        // if (auth.uid) return <Redirect to='/' />

    return (
      <div className="Auth">
            <div>
                <p>Authentication</p>
            </div>

            {action==='login'?
                <div>
                    <Login />
                    <p onClick={()=>{this.setState({action:'register'})}}> Not Register yet ? Click Here </p>
                </div>
                
            :
                <div>
                    <Signup />
                    <p onClick={()=>{this.setState({action:'login'})}}> I have an Account. Let me login </p>
                </div>
            }


      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state)
  return {
      authError: state.auth.authError,
      auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      signIn: (creds) => dispatch(signIn(creds)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
