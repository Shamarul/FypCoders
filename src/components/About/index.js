import React, { Component } from 'react';
import './index.css';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import Slider from "react-slick";
import Footer from '../Home/Footer';

import SkinCare from '../../assets/img/skincare.png';
// import Drink from '../../assets/img/drink.png';
import Drink from '../../assets/img/drink.jpg';
// import Nutrition from '../../assets/img/nutrition.jpg';
import Nutrition from '../../assets/img/nutrition.jpg';
// import EssentialOils from '../../assets/img/essentialoils.jpg';
import EssentialOils from '../../assets/img/essentialoils.jpg';

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
                  Drink - Enjoy the benefits or Aloe Vera in several varieties of Forever's Aloe Vera Gel. The primary ingredient is Aloe Vera Gel, which provides a rich supplement to healthy nutrition. Drink on a daily basis to assist digestion and absorption of nutrients, to add vitamins, minerals and amino acids to your diet, and above all, to promote a positive, healthy lifestyle.
                </p>
              </div>
              <div className="product" align="center">
                <img src={SkinCare} width='100%' height='250px'/>
                <p>
                  Skin Care - Our skin is the front line defense in our daily fight against pollution and other environmental irritants, so it deserves to be treated with extra care. Aloe Vera whose most traditional use as a natural remedy is to soothe the skin, is a key ingredient in our skin care systems. We've used the best in science and nature to develop skin care for specific types and needs, to encourage.
                </p>
              </div>
              <div className="product" align="center">
                <img src={Nutrition} width='100%' height='250px'/>
                <p>
                  Nutrition - Our nutritional supplement products are made from the finest ingredients, grown or collected from the best sources and produced with the most advanced technology. Each product retains its original nutritional value, encouraging both googd health and peace of mind.
                </p>
              </div>
              <div className="product" align="center">
                <img src={EssentialOils} width='100%' height='250px'/>
                <p>
                  Essential Oils - The human senses are incredibly powerful and greatly affect thought, mood and many other brain functions and work together to help support our perception of our surroundings. Undoubtedly, one of the most powerful senses is the.
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
