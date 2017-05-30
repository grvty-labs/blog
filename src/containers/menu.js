'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Menu from '../components/menu.js';

function mapStateToProps(state) {
  return {
    logo: '/assets/logo.svg',
    sections: ['About', 'Blog'],
    About: {
      title: 'About',
      link: '/about',
    },
    Blog: {
      title: 'Blog',
      link: '/roll',
    },
  };
}

function mapDispatchToProps(dispatch){
  return {
    goHome: () => (dispatch(push(`/`))),
    goToSection: (section) => (dispatch(push(section))),
  };
}

export default connect (mapStateToProps, mapDispatchToProps)(Menu);
