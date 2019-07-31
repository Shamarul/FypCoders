import React, { Component } from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div>
            <Header />
        </div>
        <div className="body">
            <BrowserRouter>
            <div className="aboutProduct">
                <p>- ABOUT PRODUCT FROM THE ALOEALFA.COM -</p>
            </div>
            <div className="productContainer">
                <div className="product">

                </div>
                <div className="product">

                </div>
                <div className="product">

                </div>
                <div className="product">

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

export default Home;
