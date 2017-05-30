'use strict';
import React, { Component } from 'react';
import Left_Align_Container from './left-align-container.js';

class About extends Component {
  render () {
    const{
      about_info,
    } = this.props;

    return (
      <div>
        <div className = 'header'>
          <h5 className = 'subtitle'>about</h5>
          <div className = 'title-container'>
            <h2 className = 'title'>Nice to meet you. These are some things you should know about me.</h2>
          </div>
        </div>
        <div className = 'content-about'>
          <div className = 'container-content'>
            <Left_Align_Container container = { about_info }/>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
