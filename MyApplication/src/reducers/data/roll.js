import {
  ROLL_SYNC,
  ROLL_SYNC_CANCEL,
  ROLL_SYNC_FAILED,
  ROLL_SYNC_CONTINUE,
  ROLL_SYNC_SUCCESS,
} from '../../constants/actionTypes';

const initialState = {
  id:1,
  roll: [
    {
      id: 1,
      title: 'The development of the mass allowed the mass of atoms to be measured',
      time: '10 minute read',
      image: 'https://graphicdesignlovelies.files.wordpress.com/2014/03/20130820043959s1e3_mystery_hack.png',
    },
    {
      id: 2,
      title: 'The development of the mass allowed the mass of atoms to be measured',
      time: '12 minute read',
      image: 'https://graphicdesignlovelies.files.wordpress.com/2014/03/20130820043959s1e3_mystery_hack.png',
    },
    {
      id: 3,
      title: 'The development of the mass allowed the mass of atoms to be measured',
      time: '13 minute read',
      image: 'https://graphicdesignlovelies.files.wordpress.com/2014/03/20130820043959s1e3_mystery_hack.png',
    },
    {
      id: 4,
      title: 'The development of the mass allowed the mass of atoms to be measured',
      time: '14 minute read',
      image: 'https://graphicdesignlovelies.files.wordpress.com/2014/03/20130820043959s1e3_mystery_hack.png',
    },
    {
      id: 5,
      title: 'The development of the mass allowed the mass of atoms to be measured',
      time: '15 minute read',
      image: 'https://goo.gl/YwsQF8',
    },
    {
      id: 6,
      title: 'The development of the mass allowed the mass of atoms to be measured',
      time: '16 minute read',
      image: 'https://goo.gl/YwsQF8',
    },
  ],
}

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case ROLL_SYNC:
      return {
        ...state,
      };

      case ROLL_SYNC_CANCEL:
        return {
          ...state,
        };

      case ROLL_SYNC_FAILED:
        return {
          ...state,
        };

      case ROLL_SYNC_CONTINUE:
        return {
          ...state,
        };

      case ROLL_SYNC_SUCCESS:
        return {
          ...state,
        };

      default:
        return state;

  }
}
