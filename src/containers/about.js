'use strict';
import React from 'react';
import About from '../components/about.js';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    about_info: [
      {
        title: 'Mobile',
        content: 'Data Centers have gained  with hyper connectivity. To handle connectivity and capacity across',
        icon: '/assets/ipad.svg',
      },
      {
        title: 'Mobile',
        content: 'Data Centers have gained  with hyper connectivity. To handle connectivity and capacity across',
        icon: '/assets/ipad.svg',
      },
      {
        title: 'Mobile',
        content: 'Data Centers have gained  with hyper connectivity. To handle connectivity and capacity across',
        icon: '/assets/ipad.svg',
      },
      {
        title: 'Mobile',
        content: 'Data Centers have gained  with hyper connectivity. To handle connectivity and capacity across',
        icon: '/assets/ipad.svg',
      },
    ]
  };
}

function mapDispatchToProps(dispatch){
  return{

  };
}

export default connect (mapStateToProps, mapDispatchToProps)(About);
