import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebase from './Firebase.js';
import './assets/fonts/Friday.otf'

const store = createStore(reducers,
    compose (
            applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
            reduxFirestore(firebase),
            reactReduxFirebase(firebase, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true})
        )
);

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, 
        document.getElementById('root')
    );
    
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();
})
