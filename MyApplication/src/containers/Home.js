import React from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home.js';
import { withRouter } from 'react-router-dom';

function mapStateToProps(state){
  return{
    title: 'This is a website I am building to learn new front-end technology.',
    subtitle: 'This website was built with React / Redux',
    latest_post: [
      {
        title: 'The development of the mass allowed the mass of atoms to be measured',
        time: '10 minute read',
        image: 'https://goo.gl/YwsQF8',
        link: '/post/1',
      },
    ]
  };
}

function mapDispatchToProps(dispatch){
  return{
  };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Home));
