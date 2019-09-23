import React, { Component } from 'react';
import './index.css';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import Footer from '../Home/Footer';
// import Drink from '../../assets/img/drink.png';
import Drink from '../../assets/img/drink.jpg';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import _ from 'lodash';
import Modal from 'react-awesome-modal';

class Cart extends Component {

  constructor(props) {
      super(props);
      this.state = {
          shopping: false,
          grandTotal: 0,
      }
  }

  openModal = (item) => {
    this.setState({
      price:item.price, title:item.title, url:item.url, description:item.description ,visible : true, itemName: item.itemName
    });
  }

  closeModal() {
      this.setState({
          visible : false, quantity: 1,
      });
  }

  renderCartItem = () => {
    let no = 1;
    let grandTotal = 0;

    return _.map(this.props.carts, (cart, key) => {
        grandTotal = grandTotal + (cart.price*cart.quantity);
        return (
            <div align='center' onClick={() => this.openModal(cart)} key={key} 
            style={{display:"flex", flexDirection:"row", justifyContent: "flex-start", paddingLeft:"40px", alignContent: "center", alignItems: "center"}}>
              <p style={{paddingLeft:"20px"}}>{no++}.</p>
              <img style={{paddingLeft:"20px"}} src={cart.url} height="100px" width="100px"/>
              <p style={{paddingLeft:"20px"}}>{cart.itemName}</p>
              <p style={{paddingLeft:"20px"}}>Price: {cart.price}</p>
              <p style={{paddingLeft:"20px"}}>Quantity: {cart.quantity}</p>
              <p style={{paddingLeft:"20px"}}>Total: {cart.price*cart.quantity}</p>
            </div>
        );
    });
  }

  render() {

    const { shopping, grandTotal } = this.state;
        if (shopping) return <Redirect to='/product' />
    return (
      <div className="Home">
        <div className="body">
            <div className="cart">
                <h1 style={{paddingLeft:"20px"}}>My Cart</h1>
                <p style={{margin:"20px", borderTop:"2px solid black"}} />
                {
                    this.props.carts?
                        <div>
                            { this.renderCartItem() }
                            <p>GrandTotal : RM{this.state.grandTotal}</p>
                        </div>
                    :
                        <div align="center" style={{display:"flex",justifyContent:"center",flexDirection:'column'}}>
                            <h2>Cart is Empty</h2>
                            <h3 onClick={()=>{this.setState({shopping:true})}} style={{textDecoration:"underline"}} >Continue Shopping</h3>
                        </div>
                }
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
      auth: state.firebase.auth,
      carts: state.firestore.data.carts,
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // addCart: (newCart) => dispatch(addCart(newCart)),
    }
  }

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect((props) =>[
        {
            collection: 'carts',  doc: props.auth.uid,
            subcollections: [{ 
                collection: 'cart', 
            }],
                
            storeAs: 'carts'
        }
    ])
  )(Cart);
