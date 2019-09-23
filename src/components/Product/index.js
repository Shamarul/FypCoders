import React, { Component } from 'react';
import './index.css';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from 'react-awesome-modal';

import Slider from "react-slick";
import Footer from '../Home/Footer';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import _ from 'lodash';

class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
        visible : false,
        addProduct: false,

        title:'',
        url:'',
        description:'',
        price: '',
        quantity: 1,
    }
    this.settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    }
  }

  componentDidMount () {

  }

  openModal = (item) => {
    this.setState({
      price:item.price, title:item.title, url:item.url, description:item.description ,visible : true
    });
  }

  closeModal() {
      this.setState({
          visible : false, quantity: 1,
      });
  }

  renderItemList = () => {
    return _.map(this.props.items, (item, key) => {
        return (
            <div align='center' onClick={() => this.openModal(item)}>
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
          <Slider {...this.settings}>
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
        <Modal visible={this.state.visible} width="80%" height="80%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
          <div align="center">
              <h1>{this.state.title}</h1>
              <img src={this.state.url} height="300px" width="400px"/>
              <p>Price: Rm {this.state.price}</p>
              <p>Description :{this.state.description}</p>
              <div className="quantity">
                <p>Quantity:</p>
                <p onClick={()=>{if(this.state.quantity!==1)this.setState({quantity:this.state.quantity-1})}} style={{paddingRight:"5px", paddingLeft:"5px"}}>-</p>
                <p>{this.state.quantity}</p>
                <p onClick={()=>{this.setState({quantity:this.state.quantity+1})}} style={{paddingLeft:"5px", paddingRight:"5px"}}>+</p>
              </div>
              <p>Total: {this.state.price*this.state.quantity}</p>

              <p><a href="javascript:void(0);" onClick={() => this.closeModal()}>ADD TO CART</a></p>

              <a href="javascript:void(0);" onClick={() => this.closeModal()}>CANCEL</a>
          </div>
        </Modal>
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
