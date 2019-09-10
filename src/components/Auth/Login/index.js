import React, { Component } from 'react';
import './index.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../../../actions/AuthActions';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
      })
  }

  handleSubmit = (e) => {
      e.preventDefault();
      this.props.signIn(this.state);

      // this.setState({loginStatus: true});
  }

  render() {

    const { authError , auth } = this.props;
        if (auth.uid) return <Redirect to='/' />

    return (
      <div className="Login" align="center">
            <div className="containerLogin">
              <div>
                  <p className="textSignup">Log In</p>
              </div>
              <form onSubmit={this.handleSubmit} className='formLogin'>
                  <div className='paramInput'>
                    <input className='field' type='email' id='email' onChange={this.handleChange} placeholder='Email'/>
                  </div>
                  <div className='paramInput'>
                    <input className='field' type='password' id='password' onChange={this.handleChange} placeholder='Password'/>
                  </div>
                      
                  <button className='buttonLogin'>Login</button>
                  <div>
                      { authError ? <p>{authError}</p> : null }
                  </div>
              </form>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
