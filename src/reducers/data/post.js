import {
  POST_FETCH,
  POST_FETCH_CANCEL,
  POST_FETCH_FAILED,
  POST_FETCH_SUCCESS,
} from '../../constants/actionTypes';

const initialState = {
  blog: {
    title: 'The development of the mass allowed the mass of atoms',
    author: 'Mabel Pines',
    time: '10 minute',
    image: 'https://static.tumblr.com/635811b7a58ea75ffd23bb99605f2004/zz1agmm/0Urnlp0fy/tumblr_static_tumblr_static_12whpz427cdwcscsocssgkcs8_640.png',
    image_video: 'http://68.media.tumblr.com/tumblr_m8ig8xsvxF1qefinno6_1280.png',
    h1_title: 'The device uses a to bend the trajectory of beam of ions, and the amount of deflection is determined',
    text1: [
  "The device uses a magnet to bend the trajectory of a beam of ions, and the amount of deflection is determined by the ratio of an atom's mass to its charge. The chemist Francis William Aston used this instrument to show that isotopes had masse. The atomic mass of these isotopes varied integer the proton, by the physicist James van Chadwick in 1932. Isotopes were then explained as elements with the same number of protons, but different numbers of neutrons within the nucleus.",
"The device uses a magnet to bend the trajectory of a beam of ions, and the amount of deflection is determined by the ratio of an atom's mass to its charge. The chemist Francis William Aston used this instrument to show that isotopes had masse. The atomic mass of these isotopes varied integer the proton, by the physicist James van Chadwick in 1932. Isotopes were then explained as elements with the",
    ],
    text2: [
      "The device uses a magnet to bend the trajectory of a beam of ions, and the amount of deflection is determined by the ratio of an atom's mass to its charge. The chemist Francis William Aston used this instrument to show that isotopes had masse. The atomic mass of these isotopes varied integer the proton, by the physicist James van Chadwick in 1932. Isotopes were then explained as elements with the same number of protons, but different numbers of neutrons within the nucleus.",
    "The device uses a magnet to bend the trajectory of a beam of ions, and the amount of deflection is determined by the ratio of an atom's mass to its charge. The chemist Francis William Aston used this instrument to show that isotopes had masse. The atomic mass of these isotopes varied integer the proton, by the physicist James van Chadwick in 1932. Isotopes were then explained as elements with the",
    ],
    subject: 'REACT',
    quote: "The device uses a magnet to bend the trajectory of a beam of ions, and the amount of deflection is  by the ratio of an atom's mass to its  used this instrument to show that  had different masses. The atomic mass of these isotopes varied by",
    quote_author: 'Steve Fegun',
    quote_author_position: 'Laikra Founder',
    next_post_title: 'Super short title.',
    next_post_time: '10 minute',
    latest_post_title: 'The development of the mass allowed the mass of atoms to be measured',
    latest_post_time: '10 minute',
  },
}

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case POST_FETCH:
      return {
        ...state,
      };

    case POST_FETCH_CANCEL:
      return {
        ...state,
      };

    case POST_FETCH_FAILED:
      return {
        ...state,
      };

    case POST_FETCH_SUCCESS:
      return {
        ...state,
      };

    default:
      return state;
  }
}
