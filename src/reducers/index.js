import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AdminReducer from './AdminReducer';

import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: AuthReducer,
    admin: AdminReducer,

    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;
