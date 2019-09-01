import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyCpChYS61LkFSbf4aQcaxSzRau2hAWNenE",
    authDomain: "aloealfa.firebaseapp.com",
    databaseURL: "https://aloealfa.firebaseio.com",
    projectId: "aloealfa",
    storageBucket: "",
    messagingSenderId: "289168254375",
    appId: "1:289168254375:web:f128ab2073305f5b"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true});

const storage = firebase.storage();

export {
    storage, firebase as default
}
