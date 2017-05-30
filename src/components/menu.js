'use strict';
import React, { Component } from 'react';

class Menu extends Component {
  render() {
    const{
      logo,
      goToSection,
      goHome,
      sections,
    } = this.props;

    let sectionsRender = sections.map((key, index) => (
      <div key = { index } className = 'nav' onClick = { () =>
        goToSection (this.props[key].link) }>
        { this.props[key].title }
      </div>
    ));

    return  (
      <div className = 'menu'>
        <div className = 'left-column'>
          <div className = 'logo' onClick = { goHome }>
            <img src = { logo }/>
          </div>
        </div>
        <div className = 'right-column'>
          { sectionsRender }
        </div>
      </div>
    )
  }
}

export default Menu;
