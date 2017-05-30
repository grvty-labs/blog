'use strict';
import React, { Component } from 'react';

class Left_Align_Container extends Component {
  render() {
    let container = this.props.container.map((element, index) => (
      <div className = 'left-align-container' key = { index }>
        <div className = 'left-column'>
          <div className = 'icon'>
            <img src = { element.icon }/>
          </div>
        </div>
        <div className = 'right-column'>
          <h3>{ element.title }</h3>
          <p className = 'text'>{ element.content }</p>
        </div>
      </div>
    ));

    return (
      <div className = 'container-icon'>{ container }</div>
    )
  }
}

export default Left_Align_Container;
