'use strict';
import React, { Component } from 'react';
import Post from './rolls/post';

class Home extends Component {
  render() {
    const{
      title,
      subtitle,
      latest_post,
      goToPost,
    } = this.props;

    return (
      <div>
          <div className = 'hero'>
          <div className = 'hero-container'>
            <h5 className = 'subtitle'>{ subtitle }</h5>
            <h1 className = 'title'>{ title }</h1>
            <div className = 'button-section'>
              <div className = 'white-button button'>Get to know me</div>
              <div className = 'blue-button button'>Read my process</div>
            </div>
          </div>
        </div>
        <Post posts = { latest_post } postChange = { goToPost }/>
      </div>
    )
  }
}

export default Home;
