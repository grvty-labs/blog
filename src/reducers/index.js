import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
// import {
//   UI_APP,
// } from '../constants/reducers';
import PostReducer from './data/post';

const reducersJson = {
  // form: formReducer,
  routing: routerReducer,
};

// UI Reducers
// reducersJson[UI_APP] = UIAppReducer;

// Data Reducers
reducersJson['post'] = PostReducer;

export const reducers = combineReducers(reducersJson);

export default reducers;