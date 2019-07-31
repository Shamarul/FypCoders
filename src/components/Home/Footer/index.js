import React, { Component } from 'react';
import './index.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="about">
            <p className="bold remove-padding">About Aloe Alfa</p>
            <p className="remove-padding">My vision is to make a big online shop that can easily access to any people all over the world.</p>
            <p className="remove-padding" >Get Connect with me :</p>
            <p className="remove-padding" >Mail : alfa88_taurus@yahoo.com:</p>
            <p className="remove-padding" >Phone: +60 12-6788482</p>
        </div>
        <div className="followBy">
            <div>
                <p>Follow By</p>
            </div>
            <div className="social">
                <p>Insta</p>
                <p>Whatsup</p>
                <p>Fb</p>
            </div>
        </div>
        <div className="Joining">
            <p>Join Our Mailing List</p>
            <p>Enter your email here</p>
            <p>Subscribe now</p>
            <p>Thanks for submitting</p>
        </div>
      </div>
    );
  }
}

export default Footer;
