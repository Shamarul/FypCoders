import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

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

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true});

const storage = firebase.storage();

export {
    storage, firebase as default
}
