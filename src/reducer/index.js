import { firebaseReducer, firestoreReducer } from "react-redux-firebase";
import { combineReducers } from "redux";
import covidReducer from "./covidReducer";
//import { firebaseReducer } from "react-redux-firebase";
//import { firestoreReducer } from "redux-firestore";

export default combineReducers({
  covid: covidReducer,
  /* firebase: firebaseReducer,
  firestore: firestoreReducer, */
});
