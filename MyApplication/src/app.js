import React, { Component } from 'react';
import { NativeRouter, Route, Link } from 'react-router-native';
import { Provider } from 'react-redux';
import Drawer from 'react-native-drawer-menu';
import {Easing} from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Image,
} from 'react-native';
import {
  configureStore,
  history,
} from './store';
import styles from './styles/TopNavbar.styles';

import Home from './containers/Home.js';
import About from './containers/About.js';
import Roll from './containers/roll/Roll.js';
import Post from './containers/post/Post.js';
import Sidebar from './containers/Sidebar.js';


const store = configureStore();

class App extends Component {
  constructor(props){
    super(props);
    this.controlPanelUpdate = this.controlPanelUpdate.bind(this);
    this.closeControlPanel = this.closeControlPanel.bind(this);
    this.openControlPanel = this.openControlPanel.bind(this);
    this._drawer = null;
    //console.log(previousLocation);
    store.subscribe(() => console.log('Hola'));
  }


  closeControlPanel() {
    if (this._drawer) {
      this._drawer.closeDrawer();
    }
  };

  openControlPanel() {
    if (this._drawer) {
      this._drawer.openDrawer();
    }
  };

  controlPanelUpdate(previousLocation) {
    if(previousLocation != {location}){
      console.log('YAY');
      previousLocation = {location};
    }
    //this.closeControlPanel();
    // if(this.currentRoot != root){
    // }
  }

  render(){

    /*var closeMenu = setInterval(function () {
      if(previousLocation == {location}){
        console.log('YAY');
        previousLocation = {location};
      }
    }, 1000);*/
    //this.controlPanelUpdate(previousLocation);


    return (
      <Provider store = { store }>
        <NativeRouter history = { history }>
          <Route render = {({ location }) => (
            <Drawer ref = {(ref) => this._drawer = ref}
              drawerWidth={300}
              drawerContent={ <Sidebar/> }
              type={Drawer.types.Overlay}
              customStyles={{drawer: styles.drawer}}
              drawerPosition={Drawer.positions.Right}
              easingFunc={Easing.ease}
              >

              <ScrollView>

                <View>
                  <View style = { styles.container }>
                    <Link to = { '/'}>
                      <View style = { styles.leftColumn }>
                        <Text style = { styles.logoStyle }>Re</Text>
                        <Text style = { styles.logoBlueStyle }>|</Text>
                      </View>
                    </Link>
                    <View style = { styles.rightColumn }>
                      <TouchableHighlight onPress = { () => this.openControlPanel()}>
                        <Image style = { styles.logoImage } source = {require('./assets/menu-icon.png')}/>
                      </TouchableHighlight>
                    </View>
                  </View>
                </View>


                <View>
                  <Route exact path = '/'
                  component = { Home }/>
                  <Route exact path = '/about'
                  component = { About }/>
                  <Route exact path = '/roll'
                  component = { Roll }/>
                  <Route exact path = '/post/:id'
                  component = { Post }/>
                </View>
              </ScrollView>
            </Drawer>
          )}>
        </Route>
        </NativeRouter>
      </Provider>
    )
  }
}



export default App;
