import React, { Component } from 'react';

class Footer extends Component {
  render(){
    const{
      logo,
    } = this.props;

    return(
      <div className = 'footer'>
        <img src = { logo }/>
      </div>
    )
  }
}

export default Footer;
