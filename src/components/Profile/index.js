import React, { Component } from 'react';
import './index.css';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import Footer from '../Home/Footer';
// import Drink from '../../assets/img/drink.png';
import Drink from '../../assets/img/drink.jpg';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { updateWallet, updateAddress } from '../../actions/UserAction';

class Profile extends Component {

  constructor(props){
    super(props);
    this.state={
        address1: '',
        address2: '',
        poscode: '',
        state: '',
        country: '',

        cardno: '',
        exp: '',
        code: '',

        uid: '',
    };
  }

  componentDidMount () {
    this.setState({uid: this.props.auth.uid});

    // if(this.props.card){
    //   this.setState({cardno : this.props.card.cardno, exp :this.props.card.exp, code:this.props.card.code,})
    // }
  }

  componentWillMount () {
    console.log('test',this.props.card, this.props.auth.uid);
  }

  handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
  }

  handleSubmitAddress = () => {

    alert('Address Updated');
    this.props.updateAddress(this.state);
  }

  handleSubmitWallet = () => {

    let {cardno, exp, code} = this.state;
    if(cardno === '' || exp === '' || code === ''){
      alert('Field cardno, exp or code cant be empty');
    } else {
      alert('Wallet Updated');
      this.props.updateWallet(this.state);
    }
  }

  render() {

    // const { auth } = this.props;
    //     // if (!auth.uid) return <Redirect to='/' />
    return (
      <div className="Home">
        <div className="body" style={{flexDirection:"row", paddingLeft: "10%"}}>
            <div>
              <h3>My Address</h3>
              {
                this.props.address?
                <div  className='formLogin'>
                  <div className='paramInput'>
                    <input className='field' type='text' id='address1' onChange={this.handleChange} placeholder={this.props.address.address1===""?'address 1':this.props.address.address1} value={this.state.address1}/>
                  </div>
                  <div className='paramInput'>
                    <input className='field' type='text' id='address2' onChange={this.handleChange} placeholder={this.props.address.address2===""?'address 2':this.props.address.address2} value={this.state.address2}/>
                  </div>
                  <div className='paramInput'>
                    <input className='field' type='text' id='poscode' onChange={this.handleChange} placeholder={this.props.address.poscode===""?'poscode':this.props.address.poscode} value={this.state.poscode}/>
                  </div>
                  <div className='paramInput'>
                    <input className='field' type='text' id='state' onChange={this.handleChange} placeholder={this.props.address.state===""?'state':this.props.address.state} value={this.state.state}/>
                  </div>
                  <div className='paramInput'>
                    <input className='field' type='text' id='country' onChange={this.handleChange} placeholder={this.props.address.country===""?'country':this.props.address.country} value={this.state.country}/>
                  </div>
                  <button className='buttonLogin' onClick={this.handleSubmitAddress}>Update</button>
              </div>
                :
                <div  className='formLogin'>
                  <div className='paramInput'>
                    <input className='field' type='text' id='address1' onChange={this.handleChange} placeholder='address 1' value={this.state.address1}/>
                  </div>
                  <div className='paramInput'>
                    <input className='field' type='text' id='address2' onChange={this.handleChange} placeholder='address 2' value={this.state.address2}/>
                  </div>
                  <div className='paramInput'>
                    <input className='field' type='text' id='poscode' onChange={this.handleChange} placeholder='poscode' value={this.state.poscode}/>
                  </div>
                  <div className='paramInput'>
                    <input className='field' type='text' id='state' onChange={this.handleChange} placeholder='state' value={this.state.state}/>
                  </div>
                  <div className='paramInput'>
                    <input className='field' type='text' id='country' onChange={this.handleChange} placeholder='country' value={this.state.country}/>
                  </div>
                  <button className='buttonLogin' onClick={this.handleSubmitAddress}>Update</button>
              </div>
              }
            </div>
            <div>
            <h3>My Wallet</h3>
            {
              this.props.card?
              <div  className='formLogin'>
                  <div className='paramInput'>
                    <input className='field' type='text' id='cardno' onChange={this.handleChange} placeholder={this.props.card.cardno} value={this.state.cardno}/>
                  </div>
                  <div className='paramInput'>
                    <input className='field' type='text' id='exp' onChange={this.handleChange} placeholder={this.props.card.exp} value={this.state.exp}/>
                  </div>
                  <div className='paramInput'>
                    <input className='field' type='text' id='code' onChange={this.handleChange} placeholder={this.props.card.code} value={this.state.code}/>
                  </div>
                      
                  <button className='buttonLogin' onClick={this.handleSubmitWallet}>Update</button>
              </div>
              :
              <form onSubmit={this.handleSubmitWallet} className='formLogin'>
                  <div className='paramInput'>
                    <input className='field' type='text' id='cardno' onChange={this.handleChange} placeholder='card no' value={this.state.cardno}/>
                  </div>
                  <div className='paramInput'>
                    <input className='field' type='text' id='exp' onChange={this.handleChange} placeholder='exp date' value={this.state.exp}/>
                  </div>
                  <div className='paramInput'>
                    <input className='field' type='text' id='code' onChange={this.handleChange} placeholder='code' value={this.state.code}/>
                  </div>
                      
                  <button className='buttonLogin'>Update</button>
              </form>
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
  // console.log('mapStateToProps... ',state.firestore.data.card,)
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
      updateWallet: (data) => dispatch(updateWallet(data)),
      updateAddress: (dataAddress) => dispatch(updateAddress(dataAddress)),
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
  )(Profile);
