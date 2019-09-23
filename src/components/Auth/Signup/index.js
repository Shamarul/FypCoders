import React, { Component } from 'react';
import './index.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp, signUpAdmin } from '../../../actions/AuthActions';
import BgImg from '../../../assets/img/fypbg.jpeg'

class Signup extends Component {
  state = {
    email: '',
    password: '',
    displayName: '',
    signupFor: 'user',
    adminId: '',
    login: false,
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

    const { authSuccess } = this.props;
    const { login } = this.state;
        if (login) return <Redirect to='/login' />
        if (authSuccess === 'signup') return <Redirect to='/login' />

    const { authError } = this.props;
    const { signupFor } = this.state;

    return (
      <div className="signup" style={{backgroundImage: `url(${BgImg})`, height: '100%', 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover', justifyContent: 'center', alignContent: 'center'  }} align='center'>
              <div className='childContainer'>
                <div className='center'>
                    <p className='textSignup'>Sign Up</p>
                </div>
                {signupFor === 'user'?
                  <form onSubmit={this.handleSubmit} className=''>
                      <div className=''>
                        <div className='paramInput'>
                          <input className='field' type='text' id='displayName' onChange={this.handleChange} placeholder='Nick Name'/>
                        </div>
                        <div className='paramInput'>
                          <input className='field' type='email' id='email' onChange={this.handleChange} placeholder='Email'/>
                        </div>
                        <div className='paramInput'>
                          <input className='field' type='password' id='password' onChange={this.handleChange} placeholder='Password' />
                        </div>
                        <div className='paramInput'>
                          <input type="hidden" className='field' id='signupFor' onChange={this.handleChange} placeholder='Role' />
                        </div>
                        <button className='button' >Create User </button>
                        <p onClick={()=>{ this.setState({signupFor: 'admin'}) }}> Register Admin </p>
                      </div>
                  </form> 
                :
                  <form onSubmit={this.handleSubmitAdmin}>
                      <div className=''>
                        <div className='paramInput'>
                          <input className='field' type='text' id='displayName' onChange={this.handleChange} placeholder='Nick Name'/>
                        </div>
                        <div className='paramInput'>
                          <input className='field' type='email' id='email' onChange={this.handleChange} placeholder='Email'/>
                        </div>
                        <div className='paramInput'>
                          <input className='field' type='password' id='password' onChange={this.handleChange} placeholder='Password' />
                        </div>
                        <div className='paramInput'>
                          <input className='field' type='text' id='adminId' onChange={this.handleChange} placeholder='Admin ID' />
                        </div>
                        <div className='paramInput'>
                          <input type="hidden" className='field' id='signupFor' onChange={this.handleChange} placeholder='Role' />
                        </div>
                        <button className='button' >Create Admin</button>
                        <p onClick={()=>{ this.setState({signupFor: 'user'}) }}> Register User </p>
                      </div>
                  </form>
                }
                  <div>
                    {this.props.authError&&
                      <p style={{color:'red'}}>
                        {this.props.authError}
                      </p>
                    }
                  </div>
                  <div>
                    <p onClick={()=>{this.setState({login:!login})}}>
                      Already a member? Login
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
      authSuccess: state.auth.authSuccess,
      auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      signUp: (newUser) => dispatch(signUp(newUser)),
      signUpAdmin: (newUser) => dispatch(signUpAdmin(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
