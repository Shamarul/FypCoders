import React, { Component } from 'react';
import './index.css';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import Footer from '../Home/Footer';

import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import _ from 'lodash';

class Users extends Component {

   userList = () => {
    let no = 1;
    return _.map(this.props.users, (user, key) => {
     
        return (
            <div key={key} >
                <div align='center' 
                    style={{display:"flex", flexDirection:"row", justifyContent: "flex-start", paddingLeft:"40px", alignContent: "center", alignItems: "center"}}>
                <p>{no++}.</p>
                <p> {user.displayName }&ensp;&ensp;</p>
                <p> last login: {user.updatedAt?user.updatedAt.toDate().toDateString():'Never Log in'}&ensp;&ensp;</p>
                <p> email: {user.email}</p>

                </div>
            </div>
        );
    });
   }

  render() {

    const { auth } = this.props;
        // if (!auth.uid) return <Redirect to='/' />
    return (
      <div className="Home">
        <div className="body">
            <div className="allProduct">
                <h1 className="Zuka">- Users -</h1>
            </div>
            
            <div className="productContainer">
                <div className="cart">
                    {this.userList()}
                <div style={{padding:'50px'}} />
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
        auth: state.firebase.auth,
        role: state.firebase.profile.role,
        uid: state.firebase.auth.uid,
        deliveries: state.firestore.data.deliveries,
        users: state.firestore.data.users
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
    }
  }
  
  
  export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect((props) =>[
        { 
            collection: 'deliveries',
        },
        { 
            collection: 'users',
        },
    ])
  )(Users);
