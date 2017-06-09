import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import About from '../components/About.js';
import { withRouter } from 'react-router-dom';

function mapStateToProps(state) {
  return {
    about: [
      {
        title: 'Mobile',
        content: 'Data Centers have gained  with hyper connectivity. To handle connectivity and capacity across',
        icon: '../assets/ipad.png',
      },
      {
        title: 'Mobile',
        content: 'Data Centers have gained  with hyper connectivity. To handle connectivity and capacity across',
        icon: '../assets/ipad.png',
      },
      {
        title: 'Mobile',
        content: 'Data Centers have gained  with hyper connectivity. To handle connectivity and capacity across',
        icon: '../assets/ipad.png',
      },
      {
        title: 'Mobile',
        content: 'Data Centers have gained  with hyper connectivity. To handle connectivity and capacity across',
        icon: '../assets/ipad.png',
      },
    ]
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(About));
