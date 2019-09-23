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

var secondaryFirebase = firebase.initializeApp(config, "Secondary");

export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err })
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({type: 'SIGNOUT_SUCCESS'})
        });
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // const firebase = getFirebase();
        const firestore = getFirestore();

        secondaryFirebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                displayName: newUser.displayName,
                role: newUser.signupFor,
                // photoURL: newUser.photoURL,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
            secondaryFirebase.auth().signOut();
        }).catch((err) => {
            dispatch({ type: 'SIGNUP_ERROR', err })
        })
    }
}

export const signUpAdmin = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // const firebase = getFirebase();
        const firestore = getFirestore();

        secondaryFirebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                displayName: newUser.displayName,
                role: newUser.signupFor,
                adminid: newUser.adminId,
                // photoURL: newUser.photoURL,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
            secondaryFirebase.auth().signOut();
        }).catch((err) => {
            dispatch({ type: 'SIGNUP_ERROR', err })
        })
    }
}