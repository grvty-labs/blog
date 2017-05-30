'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Home from '../components/home.js';

function mapStateToProps(state) {
  return {
    title: 'This is a website I am building to learn new front-end technology.',
    subtitle: 'This website was built with React / Redux',
    latest_post: [
      {
        title: 'The development of the mass allowed the mass of atoms to be measured',
        time: '10 minute read',
        image: 'https://goo.gl/YwsQF8',
        link: '/post/1',
      },
    ]
  };
}

function mapDispatchToProps(dispatch){
  return {
    goToPost: (post) => (dispatch(push(post)))
  };
}

export default connect (mapStateToProps, mapDispatchToProps)(Home);
