import React, { Component } from 'react';
import './index.css';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import Slider from "react-slick";
import Footer from '../Home/Footer';

class Product extends Component {

  showImageSlide = () => {
    return (
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
    )
  }

  render() {

    const { auth } = this.props;
        // if (!auth.uid) return <Redirect to='/' />
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className="Home">
        <div className="body">
            <BrowserRouter>
            <div className="allProduct">
                <h1 className="Zuka">~ All Products ~</h1>
            </div>
            <div className="productshow" align="center">
            <Slider {...settings}>
              {/* {this.showImageSlide()} */}
              <div>
                <img src="http://placekitten.com/g/400/200" />
                <p>Image desc</p>
              </div>
              <div>
                <img src="http://placekitten.com/g/400/200" />
                <p>Image desc</p>
              </div>
              <div>
                <img src="http://placekitten.com/g/400/200" />
                <p>Image desc</p>
              </div>
              <div>
                <img src="http://placekitten.com/g/400/200" />
                <p>Image desc</p>
              </div>
              <div>
                <img src="http://placekitten.com/g/400/200" />
                <p>Image desc</p>
              </div>
              <div>
                <img src="http://placekitten.com/g/400/200" />
                <p>Image desc</p>
              </div>
            </Slider>
            </div>

            <div className="productContainer">
        
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

export default connect(mapStateToProps)(Product);
