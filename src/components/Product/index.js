import React, { Component } from 'react';
import './index.css';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import Slider from "react-slick";
import Footer from '../Home/Footer';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import _ from 'lodash';

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};

class Product extends Component {

  state = {
    addProduct: false,
  }

  renderItemList = () => {
    return _.map(this.props.items, (item, key) => {
        return (
            <div>
              <img src={item.url} height="200px" width="200px"/>
              <p>RM {item.price}</p>
              <p>{item.description}</p>
            </div>
        );
    });
  }

  showImageSlide = () => {
    return (
        <div style={{width:"80%", alignSelf:"center"}}>
          <Slider {...settings}>
              {this.renderItemList()}
          </Slider>
        </div>
    )
  }

  render() {

    const { addProduct } = this.state;
        if (addProduct) return <Redirect to='/additem' />

    return (
      <div className="Home">
        <div className="body">
            <BrowserRouter>
            <div className="allProduct">
                <h1 className="Zuka">~ All Products ~</h1>
            </div>
            <div className="productshow" align="center">
            
            </div>
            {this.showImageSlide()}
            <div className="productContainer">
              {/* {this.showImageSlide()} */}
            </div>

            {this.props.role === 'admin'&&
              <div onClick={()=>{this.setState({addProduct:true})}} align='center' className='addItem'>
                <p style={{color: 'white'}}>+ Add new item</p>
              </div>
            }
            <div style={{padding: 20}}></div>
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
      auth: state.firebase.auth,
      role: state.firebase.profile.role,
      items: state.firestore.data.items,
  }
}



export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) =>[
      { 
          collection: 'items',
          
          storeAs: 'items'
      },
  ])
)(Product);
