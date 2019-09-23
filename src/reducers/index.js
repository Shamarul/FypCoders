import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AdminReducer from './AdminReducer';
import UserReducer from './UserReducer';

import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: AuthReducer,
    admin: AdminReducer,
    user: UserReducer,

    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;
