import React from 'react';
import { connect } from 'react-redux';
import Post from '../../components/post/Post.js';
import { withRouter } from 'react-router-dom';

function mapStateToProps(state, ownProps){
  let id = parseInt(ownProps.match.params.id);
  let idNext = id+1;
  let idBack = id;
  if(id >= 2){
    idBack = id -1;
  }

  return {
    blog: state.post.blog,
    idNext,
    idBack,
  };
}

function mapDispatchToProps(dispatch){
  return {

  };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Post));
