'use strict';
import React from 'react';
import Footer from '../components/footer.js';
import { connect } from 'react-redux';

function mapStateToProps(state){
  return{
    logo: '/assets/logo.svg',
  }
};

function mapDispatchToProps(dispatch){
  return{

  };
}

export default connect (mapStateToProps, mapDispatchToProps)(Footer);
