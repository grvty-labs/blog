import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
// import {
//   UI_APP,
// } from '../constants/reducers';
import RollReducer from './data/roll';
import PostReducer from './data/post';
import AppReducer from './ui/app';

const reducersJson = {
  // form: formReducer,
  routing: routerReducer,
};

// UI Reducers
// reducersJson[UI_APP] = UIAppReducer;

// Data Reducers
reducersJson['roll'] = RollReducer;
reducersJson['post'] = PostReducer;
reducersJson['app'] = AppReducer;

export const reducers = combineReducers(reducersJson);

export default reducers;
