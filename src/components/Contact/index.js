import React, { Component } from 'react';
import './index.css';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import Slider from "react-slick";
import Footer from '../Home/Footer';

import SkinCare from '../../assets/img/skincare.png';
import Shopall from '../../assets/img/shopall.png';
import Stockup from '../../assets/img/stockup.png'
// import Drink from '../../assets/img/drink.png';
import Drink from '../../assets/img/drink.jpg';

class Contact extends Component {

  render() {

    const { auth } = this.props;
        // if (!auth.uid) return <Redirect to='/' />
    return (
      <div className="Home">
        <div className="body">
            <div className="allProduct">
                <h1 className="Zuka">- Contact Us -</h1>
            </div>
            <div align="center" className="contactus">
                <p className="remove-padding">For general information or queries concerning your order</p>
                <p className="remove-padding">please contact us at:</p>
                <p> E: alfa88_taurus@yahoo.com T: +601264788482</p>
                <div>
                    <input className='fieldSubscribe' type='text' id='name' placeholder='Name'/>
                    <input className='fieldSubscribe' type='email' id='email' placeholder='Email'/>
                </div>
                <input className='fieldSubscribe' type='no' id='phone' placeholder='Phone'/>
                <div>
                    <textarea />
                    <button>Submit</button>
                </div>
            </div>
            <div className="productContainer">
        
            </div>
        </div>
        <div>
            <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      authError: state.auth.authError,
      auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Contact);
