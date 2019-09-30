import firebase from 'firebase/app';

const config = {
    // apiKey: "AIzaSyCpChYS61LkFSbf4aQcaxSzRau2hAWNenE",
    // authDomain: "aloealfa.firebaseapp.com",
    // databaseURL: "https://aloealfa.firebaseio.com",
    // projectId: "aloealfa",
    // storageBucket: "",
    // messagingSenderId: "289168254375",
    // appId: "1:289168254375:web:f128ab2073305f5b"
    apiKey: "AIzaSyBveEDKGtZeOsgZMpG6I7o5m4Wxd7hbgRo",
    authDomain: "fypcoders.firebaseapp.com",
    databaseURL: "https://fypcoders.firebaseio.com",
    projectId: "fypcoders",
    storageBucket: "fypcoders.appspot.com",
    messagingSenderId: "13513806498",
    appId: "1:13513806498:web:e74be1e420408c78"
};

var FourthFirebase = firebase.initializeApp(config, "Fourth");

export const addCart = (newCart) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // const firebase = getFirebase();
        const firestore = getFirestore();

        const ref = firestore.collection('carts').doc();
        const key = ref.id;

        firestore.collection('carts').doc(newCart.uid).
            collection('cart').doc(key).set({
                itemName: newCart.itemName,
                price: newCart.price,
                description: newCart.description,
                quantity: newCart.quantity,
                url: newCart.url,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        }).then(() => {
            dispatch({ type: 'ADDCART_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'ADDCART_ERROR', err })
        })
    }
}

export const deleteCart = (uid, key) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        
        const firestore = getFirestore();
  
        firestore.collection('carts').doc(uid)
        .collection('cart').doc(key).delete().then(() => {
            dispatch({ type: 'DELETE_CART' , key  });
        }).catch((err) => {
            dispatch({ type: 'DELETE_CART_ERROR', err });
        })
    }
}

export const checkout = (uid, cart, key, address) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        
        const firestore = getFirestore();

        firestore.collection('deliveries').doc(uid).collection('delivery').doc(key).set({
            itemName: cart.itemName,
            price: cart.price,
            description: cart.description,
            quantity: cart.quantity,
            url: cart.url,
            address: address.address1+' '+address.address2+' '+address.poscode+' '+address.state+' '+address.country,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        }).then(() => {
            dispatch({ type: 'DELIVERY_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'DELIVERY_ERROR', err })
        })
  
        firestore.collection('carts').doc(uid).collection('cart').doc(key).delete().then(() => {
            dispatch({ type: 'CHECKOUT_SUCCESS' , uid  });
        }).catch((err) => {
            dispatch({ type: 'CHECKOUT_ERROR', err });
        })
    }
}

export const updateAddress = (data) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // const firebase = getFirebase();
        const firestore = getFirestore();

        const ref = firestore.collection('address').doc();
        const key = ref.id;

        firestore.collection('address').doc(data.uid).set({
                address1: data.address1,
                address2: data.address2,
                poscode: data.poscode,
                state: data.state,
                country: data.country,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        }).then(() => {
            dispatch({ type: 'ADDRESS_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'ADDRESS_ERROR', err })
        })
    }
}

export const updateWallet = (data) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // const firebase = getFirebase();
        const firestore = getFirestore();

        const ref = firestore.collection('card').doc();
        const key = ref.id;

        firestore.collection('card').doc(data.uid).set({
                cardno: data.cardno,
                exp: data.exp,
                code: data.code,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        }).then(() => {
            dispatch({ type: 'WALLET_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'WALLET_ERROR', err })
        })
    }
}