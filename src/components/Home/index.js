import React, { Component } from 'react';
import './index.css';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import Slider from "react-slick";
import Footer from './Footer';

import SkinCare from '../../assets/img/skincare.png';
import Shopall from '../../assets/img/shopall.png';
import Stockup from '../../assets/img/stockup.png'
// import Drink from '../../assets/img/drink.png';
import Drink from '../../assets/img/drink.jpg';

class Home extends Component {

  render() {

    const { auth } = this.props;
        // if (!auth.uid) return <Redirect to='/' />
    return (
      <div className="Home">
        <div className="bodyHome">
            <div className='body1'>
              <div>
                  <img src={Shopall} width='400px'/>
              </div>
            </div>
            <div className='body2'>
               <div className='body2chidlren'>
                  <h2 className='remove-padding'>ALOEALFA</h2>
                  <p className='remove-padding'>A</p>
                  <p className='remove-padding'>BEAUTY NEVER</p>
                  <p className='remove-padding'>FADE</p>
                  <p className='remove-padding'>--------</p>
                  <p className='remove-padding'>Shop now ></p>

               </div>
            </div>
            <div className='body3'>
                <img src={Stockup} width='300px'/>
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

export default connect(mapStateToProps)(Home);
