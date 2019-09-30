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
import { deleteCart, checkout } from '../../actions/UserAction';
import Maybank from '../../assets/img/maybank.png';
import Rhb from '../../assets/img/rhb.png';
import Loader from 'react-loader-spinner'

class Cart extends Component {

  constructor(props) {
      super(props);
      this.state = {
          visible : false,
          shopping: false,
          grandTotal: 0,
          paymentType: "",
          profile: false,
          proceedPayment: false,
      }
  }

  openModal = () => {
    this.setState({
      visible : true
    });
  }

  closeModal() {
      this.setState({
          visible : false
      })
  }

  removeCart= (key) =>{
    this.props.deleteCart(this.props.auth.uid, key);
  }

  renderCartItem = () => {
    let no = 1;

    return _.map(this.props.carts, (cart, key) => {
        if(cart){
        return (
            <div key={key} >
                <div align='center' onClick={() => this.openModal(cart)} 
                    style={{display:"flex", flexDirection:"row", justifyContent: "flex-start", paddingLeft:"40px", alignContent: "center", alignItems: "center"}}>
                    <p style={{paddingLeft:"20px"}}>{no++}.</p>
                    <img style={{paddingLeft:"20px"}} src={cart.url} height="100px" width="100px"/>
                    <p style={{paddingLeft:"20px"}}>{cart.itemName}</p>
                    <p style={{paddingLeft:"20px"}}>Price: {cart.price}</p>
                    <p style={{paddingLeft:"20px"}}>Quantity: {cart.quantity}</p>
                    <p style={{paddingLeft:"20px"}}>Total: {cart.price*cart.quantity}</p>
                    <p onClick={()=>{this.removeCart(key)}} style={{marginLeft:"20px", backgroundColor:"red", borderRadius:"50%", padding:"5px"}}> X </p>
                </div>
            </div>
        );
        }
    });
  }

  getGrandTotal = () => {
    let grandTotal = 0;
    _.map(this.props.carts, (cart, key) => {
        if(cart){
        grandTotal = grandTotal + (cart.price*cart.quantity);
        }
    });

    return grandTotal;
  }

  checkout = () => {
    return _.map(this.props.carts, (cart, key) => {
      if(cart){
        this.props.checkout(this.props.auth.uid, cart, key, this.props.address);
      }
  });
  }

  render() {

    const { shopping, grandTotal, profile } = this.state;
        if (shopping) return <Redirect to='/product' />
        if (profile) return <Redirect to='/profile' />

    return (
      <div className="Home">
        <Modal visible={this.state.visible} width="80%" min-Height="80%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
          <div align="center" style={{padding: "20px"}}>
              <p>Payment</p>
              { this.state.paymentType === ""?
                  this.props.card && this.props.address? // && this.props.address
                  <div style={{paddingTop:"40px"}}>
                    <p> Selected your save card bank to continue</p>
                    <img onClick={()=>{this.setState({paymentType: "Maybank"})}} src={Maybank} height="100px" width="200px" />
                    <img onClick={()=>{this.setState({paymentType: "Rhb"})}} src={Rhb} height="100px" width="200px" />
                  </div>
                  :
                  <p onClick={()=>this.setState({profile:true})}>Please Enter your details in profile page to proceed payment [Click here]</p>
              :
                this.state.proceedPayment?
                <Loader
                  type="Puff"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={3000} //3 secs

	              />
                :
                <div>
                  <p>{this.state.paymentType}</p>
                  <button onClick={()=>{this.setState({proceedPayment: true});setTimeout(
                      function() {
                        this.closeModal();
                        alert('Payment succeed !! Your item will be deliver in 3days working day');
                        this.checkout();
                      }
                      .bind(this),
                      3500
                  );}}>Continue</button>
                </div>
              }
          </div>
        </Modal>
        <div className="body">
            <div className="cart">
                <h1 style={{paddingLeft:"20px"}}>My Cart</h1>
                <p style={{margin:"20px", borderTop:"2px solid black"}} />
                {
                    this.props.carts?
                        <div>
                            { this.renderCartItem() }
                            <p style={{display:"flex", justifyContent:"flex-end", padding:"30px"}}>GrandTotal : RM{this.getGrandTotal()}</p>
                            <div align="center" style={{margin:"20px"}}>
                            <p onClick={()=>{this.openModal()}} align="center" style={{display:"flex", justifyContent:"center", padding:"30px", alignContent : "center",
                            backgroundColor:"green", margin:"20px", width: "40%", borderRadius: "25px"}}>Check Out</p>
                            </div>
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
      card: state.firestore.data.card,
      address: state.firestore.data.address,
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCart: (uid, key) => dispatch(deleteCart(uid, key)),
        checkout: (uid, cart, key, address) => dispatch(checkout(uid, cart, key, address)),
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
        },
        {
          collection: 'card',  doc: props.auth.uid,       
          storeAs: 'card'
        },
        {
          collection: 'address',  doc: props.auth.uid,
              
          storeAs: 'address'
      }
    ])
  )(Cart);
