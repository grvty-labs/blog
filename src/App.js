import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router, push } from 'react-router-redux';
import { Route, Switch } from 'react-router';
import {
  configureStore,
  history,
} from './store';

import Post from './containers/posts/post.js';
import Menu from './containers/menu.js';
import Home from './containers/home.js';
import Roll from './containers/rolls/roll.js';
import About from './containers/about.js';
import Footer from './containers/footer.js';

import './css/app.css';

const store = configureStore();

class Blog extends Component {
  /*constructor(props){
    super(props);
  }*/

  render() {
    return (
      <Provider store= { store }>
        <Router history = { history }>
          <Route render = {({ location }) => (
            <div className = 'container'>
              <Menu/>
              <div className = 'content'>
                <Route exact path = '/'
                component = { Home }/>
                <Route exact path = '/roll'
                component = { Roll }/>
                <Route exact path = '/post/1'
                component = { Post } />
                <Route exact path = '/about'
                component = { About }/>
              </div>
              <Footer/>
            </div>
          )}>
          </Route>
        </Router>
      </Provider>
    );
  }
};

export default Blog;
