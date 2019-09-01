import React, { Component } from 'react';
import './index.css';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import Header from './Header';
import Footer from './Footer';

class Home extends Component {

  render() {

    const { auth } = this.props;
        // if (!auth.uid) return <Redirect to='/' />

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

const mapStateToProps = (state) => {
  return {
      authError: state.auth.authError,
      auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Home);
