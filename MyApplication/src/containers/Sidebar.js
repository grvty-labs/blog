import React from 'react';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar.js';
import { withRouter } from 'react-router-dom';
import { changeLocation } from '../actions/menu.actions.js';

function mapStateToProps(state) {
  return{
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
  return{
    goToSection: (section) => (dispatch(changeLocation(section))),

  };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Sidebar));
