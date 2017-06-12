import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import { Link } from 'react-router-native';
import styles from '../styles/Sidebar.styles';

class Sidebar extends Component {
  render() {
    const {
      sections,
      openControlPanel,
      goToSection,
    } = this.props;

    let sectionsRender = sections.map((key, index) => (
      <TouchableHighlight key = { index } onPress = { goToSection }>
        <Text style = { styles.textNav }>
          { this.props[key].title }
        </Text>
      </TouchableHighlight>
    ));

    return(
      <View style = { styles.navContainer }>
        { sectionsRender }
      </View>
    )
  }
}

export default Sidebar;
