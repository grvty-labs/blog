'use strict';
import React, { Component } from 'react';
import Post from './post.js';

class Roll extends Component {
  render() {
    const{
      title,
      subtitle,
      posts,
      postChange
    } = this.props;

    return (
      <div>
        <div className = 'header'>
          <h5 className = 'subtitle'> { subtitle } </h5>
          <div className = 'title-container'>
            <h2 className = 'title'> { title }</h2>
          </div>
        </div>
        <Post posts = { posts } postChange={ postChange }/>
        <div className = 'pagination'>
          <div className = 'pagination-container'>
            <p>More recent.</p>
            <p>Older.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Roll;
