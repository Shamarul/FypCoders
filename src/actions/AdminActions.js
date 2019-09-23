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

var ThirdFirebase = firebase.initializeApp(config, "Third");

export const addItem = (newItem) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // const firebase = getFirebase();
        const firestore = getFirestore();

        const ref = firestore.collection('items').doc();
        const key = ref.id;

        firestore.collection('items').doc(key).set({
                itemName: newItem.itemName,
                price: newItem.price,
                description: newItem.description,
                adminid: newItem.userUid,
                url: newItem.url,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            dispatch({ type: 'ADDITEM_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'ADDITEM_ERROR', err })
        })
    }
}