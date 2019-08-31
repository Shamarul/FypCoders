import React, { Component } from 'react';
import './index.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../../../actions/AuthActions';

class Login extends Component {
  state = {
    email: '',
    password: '',
    loginStatus: false,
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

    // if(this.state.loginStatus) return <Redirect to='/home' />
    const { authError , auth } = this.props;
        if (auth.uid) return <Redirect to='/home' />

    return (
      <div className="Login">
            <form onSubmit={this.handleSubmit} className=''>
                    <h5 className='' > Sign In </h5>
                    <input type='email' id='email' onChange={this.handleChange} />
                    <input type='password' id='password' onChange={this.handleChange} />
                    <button>Login</button>
                    <div>
                        { authError ? <p>{authError}</p> : null }
                    </div>
            </form>
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
