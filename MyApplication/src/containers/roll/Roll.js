import React from 'react';
import { connect } from 'react-redux';
import Roll from '../../components/roll/Roll.js';
import { withRouter } from 'react-router-dom';

function mapStateToProps (state) {
  return {
    title: 'I am keeping a journal of all my findings',
    subtitle: 'blog',
    posts: state.roll.roll,
  };
}

function mapDispatchToProps(dispatch){
  return {
  };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Roll));
