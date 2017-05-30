import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
// import {
//   UI_APP,
// } from '../constants/reducers';
// import UIAppReducer from './ui/app';

const reducersJson = {
  // form: formReducer,
  routing: routerReducer,
};

// UI Reducers
// reducersJson[UI_APP] = UIAppReducer;

// Data Reducers

export const reducers = combineReducers(reducersJson);

export default reducers;
