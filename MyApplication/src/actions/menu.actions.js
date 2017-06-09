import {
  CHANGED_LOCATION,
} from '../constants/actions';

export function toggleMenu(boolean){
  return {
    type: CHANGED_LOCATION,
    payload: boolean,
  };
}
