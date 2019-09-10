import React, { Component } from 'react';
import './index.css';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import Slider from "react-slick";
import Footer from '../Home/Footer';

import SkinCare from '../../assets/img/skincare.png';
// import Drink from '../../assets/img/drink.png';
import Drink from '../../assets/img/drink.jpg';

class About extends Component {

  render() {

    const { auth } = this.props;
        // if (!auth.uid) return <Redirect to='/' />
    return (
      <div className="Home">
        <div className="body">
            <BrowserRouter>
            <div className="aboutProduct">
                <h1 className="Zuka">- ABOUT PRODUCT FROM THE ALOEALFA.COM -</h1>
            </div>

            <div className="productContainer">
              <div className="product" align="center">
                <img src={Drink} width='100%' height='250px'/>
                <p>
                  Drink - Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla
                </p>
              </div>
              <div className="product" align="center">
                <img src={SkinCare} width='100%' height='250px'/>
                <p>
                  Skin Care - Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla
                </p>
              </div>
              <div className="product" align="center">
                <p>
                  Image
                </p>
                <p>
                  Nutrition - Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla
                </p>
              </div>
              <div className="product" align="center">
                <p>
                  Image
                </p>
                <p>
                  Essential Oil - Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla
                </p>
              </div>
            </div>
            </BrowserRouter>
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

export default connect(mapStateToProps)(About);
