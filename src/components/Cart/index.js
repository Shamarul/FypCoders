import React, { Component } from 'react';
import './index.css';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import Footer from '../Home/Footer';
// import Drink from '../../assets/img/drink.png';
import Drink from '../../assets/img/drink.jpg';

class Cart extends Component {

  constructor(props) {
      super(props);
      this.state = {
          shopping: false,
      }
  }

  render() {

    const { shopping } = this.state;
        if (shopping) return <Redirect to='/product' />
    return (
      <div className="Home">
        <div className="body">
            <div className="cart">
                <h1 style={{paddingLeft:"20px"}}>My Cart</h1>
                <p style={{margin:"20px", borderTop:"2px solid black"}} />
                <div align="center" style={{display:"flex",justifyContent:"center",flexDirection:'column'}}>
                    <h2>Cart is Empty</h2>
                    <h3 onClick={()=>{this.setState({shopping:true})}} style={{textDecoration:"underline"}} >Continue Shopping</h3>
                </div>
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

export default connect(mapStateToProps)(Cart);
