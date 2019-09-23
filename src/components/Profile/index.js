import React, { Component } from 'react';
import './index.css';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import Footer from '../Home/Footer';
// import Drink from '../../assets/img/drink.png';
import Drink from '../../assets/img/drink.jpg';

class Profile extends Component {

  render() {

    // const { auth } = this.props;
    //     // if (!auth.uid) return <Redirect to='/' />
    return (
      <div className="Home">
        <div className="body">
            
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

export default connect(mapStateToProps)(Profile);
