import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import rootReducer from "./reducer/index";
import covidReducer from "./reducer/covidReducer";
import summaryReducer from "./reducer/summaryReducer";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
// import {ReactReduxFirebase,firebaseReducer,reactReduxFirebase,} from "react-redux-firebase";
import { firebaseReducer } from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMLsuS3LE290aRWbP1T3vjrlGvIi3cyfk",
  authDomain: "cloud19-27a93.firebaseapp.com",
  projectId: "cloud19-27a93",
  storageBucket: "cloud19-27a93.appspot.com",
  messagingSenderId: "568896700003",
  appId: "1:568896700003:web:13547ddd897ed00dd40256",
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// init firestore
//const firestore = firebase.firestore();

//const initialState = {};
const middleware = [thunk];

// export const storage = firebase.storage().ref();
const storage = firebase.storage();
export const gsReference = storage.refFromURL(
  "gs://cloud19-27a93.appspot.com/covid_virus_logo.png"
);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  covid: covidReducer,
  summarydata: summaryReducer
});

//const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
const store = createStore(rootReducer, applyMiddleware(thunk));

/* const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  reactReduxFirebase(firebase)
); */
// export default createStore(rootReducer, applyMiddleware(thunk));

console.log("hello world");

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export default store;
