import {
  CHANGED_LOCATION,
  TOGGLE_MENU,
} from '../constants/actionTypes';

export function toggleMenu(){
  return {
    type: TOGGLE_MENU,
    payload: null,
  };
}

export function changeLocation(location){
  return {
    type: CHANGED_LOCATION,
    payload: location,
  }
}
