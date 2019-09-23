import React, { Component } from 'react';
import './index.css';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import product from '../Product';
import {storage} from '../../Firebase';
import { addItem } from '../../actions/AdminActions';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import Slider from "react-slick";
import Footer from '../Home/Footer';

class Additem extends Component {

  constructor(props){
      super(props);
      this.state={
          image: null,
          url: '',
          progress: 0,
          price: '',
          itemName: '',
          userUid: '',
          description: '',
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleUpload = this.handleUpload.bind(this);
  }

  componentDidMount () {
    this.setState({userUid: this.props.userUid})
  }

  handleChangeForm = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
  }

  handleChange = e => {
    if(e.target.files[0]){
        const image = e.target.files[0]
        this.setState(() => ({image})) ;
    }
  }

  handleChangePrice = (e) => {
    const price = (e.target.validity.valid) ? e.target.value : this.state.price;
    
    this.setState({ price });
  }

  handleUpload = () => {
    const{image} = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on('state_changed', 
    (snapshot)=>{
        const progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100)
        this.setState({progress});
    }, 
    (error)=>{
        console.log(error);
    }, 
    ()=>{
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
            console.log(url);
            this.setState({url});
        });
    });
  }

  showImageSlide = () => {
    return (
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state);
  }

  render() {

    const { role, success } = this.props;
        if (role !== 'admin') return <Redirect to='/product'/>
        if (success) return <Redirect to='/product' />

    return (
      <div className="Home">
        <div className="body">
            <BrowserRouter>
            <div className="allProduct">
                <h1 className="Zuka">~ Add Products ~</h1>
            </div>
            <div align="center">
                <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="preview" height="300px" width="400px"/>
            </div>
            <div align="center">
                <progress value={this.state.progress} max={100}/>
            </div>
            <div className="productshow" align="center">
                <input type="file" onChange={this.handleChange}/>
                <button onClick={this.handleUpload}>Upload</button>
            </div>

            <div className="productContainer" align='center'>
                <form onSubmit={this.handleSubmit} className=''>
                    <div className=''>
                        <div className='paramInput'>
                          <input className='field' type='text' id='itemName' onChange={this.handleChangeForm} placeholder='Item Name'/>
                        </div>
                        <div className='paramInput'>
                          <input className='field' value={this.state.price} pattern="^\d*(\.\d{0,2})?$" type='text' id='price' onChange={this.handleChangePrice} placeholder='price (RM)'/>
                        </div>
                        <div className='paramInput'>
                          <input className='field' type='text' id='description' onChange={this.handleChangeForm} placeholder='description'/>
                        </div>
                        <button className='button' >Add Item </button>
                    </div>
                </form>
            </div>

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
        userUid: state.firebase.auth.uid,
        success: state.admin.success,
  } 
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (newItem) => dispatch(addItem(newItem)),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect((props) =>[
        { 
            collection: 'items',
            
            storeAs: 'items'
        },
    ])
)(Additem);
