'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Roll from '../../components/rolls/roll.js';

function mapStateToProps (state) {
  return {
    title: 'I am keeping a journal of all my findings.',
    subtitle: 'blog',
    posts: ['Post1', 'Post2', 'Post3'],

    posts: [
      {
        title: 'The development of the mass allowed the mass of atoms to be measured',
        time: '10 minute read',
        image: 'https://goo.gl/YwsQF8',
        link: '/post/1',
      },
      {
        title: 'The development of the mass allowed the mass of atoms to be measured',
        time: '10 minute read',
        image: 'https://goo.gl/YwsQF8',
        link: '/post/2',
      },
      {
        title: 'The development of the mass allowed the mass of atoms to be measured',
        time: '10 minute read',
        image: 'https://goo.gl/YwsQF8',
        link: '/post/3',
      },
    ]
  };
}

function mapDispatchToProps(dispatch) {
  return {
    postChange: (post) => (dispatch(push(post))),
  };
}

export default connect (mapStateToProps, mapDispatchToProps)(Roll);
