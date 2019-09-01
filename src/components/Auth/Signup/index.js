import React, { Component } from 'react';
import './index.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../../actions/AuthActions';
import BgImg from '../../../assets/img/fypbg.jpeg'

class Signup extends Component {
  state = {
    email: '',
    password: '',
    displayName: '',
    signupFor: 'user',
    adminId: '',
  }

  handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }

  handleSubmitAdmin = (e) => {
    e.preventDefault();
    this.props.signUpAdmin(this.state);
  }

  render() {

    const { authError } = this.props;
    const { signupFor } = this.state;

    return (
      <div className="signup" style={{backgroundImage: `url(${BgImg})` }} align='center'>
            <div className='childContainer'>
              <div className='center'>
                  <p className='textSignup'>Sign Up</p>
              </div>
              {signupFor === 'user'?
                <form onSubmit={this.handleSubmit} className=''>
                    <div className=''>
                      <div className=''>
                        <input type='text' id='displayName' onChange={this.handleChange} placeholder='Nick Name'/>
                      </div>
                      <div className='paramInput'>
                        <input type='email' id='email' onChange={this.handleChange} placeholder='Email'/>
                      </div>
                      <div className='paramInput'>
                        <input type='password' id='password' onChange={this.handleChange} placeholder='Password' />
                      </div>
                      <button className='paramInput' >Create User </button>
                      <p onClick={()=>{ this.setState({signupFor: 'admin'}) }}> Register Admin </p>
                    </div>
                    { authError ? <p>{authError}</p> : null }
                </form> 
              :
                <form onSubmit={this.handleSubmitAdmin}>
                    <div className=''>
                      <div className=''>
                        <input className='inputStyle' type='text' id='displayName' onChange={this.handleChange} placeholder='Nick Name'/>
                      </div>
                      <div className='paramInput'>
                        <input type='email' id='email' onChange={this.handleChange} placeholder='Email'/>
                      </div>
                      <div className='paramInput'>
                        <input type='password' id='password' onChange={this.handleChange} placeholder='Password' />
                      </div>
                      <div className='paramInput'>
                        <input type='text' id='adminId' onChange={this.handleChange} placeholder='Admin ID' />
                      </div>
                      <button className='paramInput' >Create Admin</button>
                      <p onClick={()=>{ this.setState({signupFor: 'user'}) }}> Register User </p>
                    </div>
                </form>
            }
              <div>
                <p>
                  Already a member? Log in
                </p>
              </div>
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
      signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
