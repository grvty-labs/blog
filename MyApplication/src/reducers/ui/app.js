import {
  TOGGLE_MENU,
} from '../../constants/actionTypes';

const initialState = {
  showMenu: false,
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        showMenu: !state.showMenu,
      };

    default:
      return {
        ...state,
      };
  }
}
