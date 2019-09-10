import React, { Component } from 'react';
import './index.css';

import InstagramIcon from '../../../assets/img/inst.png';
import WhatappIcon from '../../../assets/img/whatsap.png';
import FacebookIcon from '../../../assets/img/fb.png';

class Footer extends Component {
  state = {
    email: '',
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
    return (
      <div className="Footer">
        <div className="about">
            <h2 className="bold remove-padding abouttext">About Aloe Alfa</h2>
            <p className="remove-padding">My vision is to make a big online shop that can easily access to any people all over the world.</p>
            <p className="remove-padding" >Get Connect with me :</p>
            <p className="remove-padding" >Mail : alfa88_taurus@yahoo.com:</p>
            <p className="remove-padding" >Phone: +60 12-6788482</p>
        </div>
        <div className="followBy">
            <div>
                <h2 className="bold remove-padding abouttext">Follow By</h2>
            </div>
            <div className="social">
                <p className="icon"><a href="https://www.instagram.com/" target="_blank"><img src={InstagramIcon} height='50px'/></a></p>
                <p className="icon"><a href="https://www.whatsapp.com" target="_blank"><img src={WhatappIcon} height='50px'/></a></p>
                <p className="icon"><a href="https://www.facebook.com/" target="_blank"><img src={FacebookIcon} height='50px'/></a></p>
            </div>
        </div>
        <div className="joinMailist">
            <h2 className="bold remove-padding abouttext">About Aloe Alfa</h2>
            <form onSubmit={this.handleSubmit} className='formLogin'>
                  <input className='fieldSubscribe' type='email' id='email' onChange={this.handleChange} placeholder='Enter your email here*'/>
                  <button className='buttonSubscribe'>Subscribe Now</button>
                  <div>
                      { this.props.authError ? <p>{this.props.authError}</p> : null }
                  </div>
            </form>
        </div>
      </div>
    );
  }
}

export default Footer;
