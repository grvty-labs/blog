'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Post from '../../components/posts/post.js';

function mapStateToProps(state, ownProps) {
  let id = ownProps.match.params.id;
  console.log(id);

  return {
    blog: state.post.blog,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeNext: () => (dispatch(push(`blog/${ 2 }`))),
    changeBack: () => (dispatch(push(`blog/${ 0 }`))),
  };
}

export default connect (mapStateToProps, mapDispatchToProps)(Post);
