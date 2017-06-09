import React, { Component } from 'react';
import styles from '../styles/Home.styles';
import style from '../styles/Basic.styles';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import MiniPost from './roll/MiniPost.js';
import { Link } from 'react-router-native';

class Home extends Component {
  render() {
    const {
      title,
      subtitle,
      latest_post,
    } = this.props;

    return (
        <View>
        <View style = { style.header }>
            <Text style = { style.subtitle }>{ subtitle.toUpperCase() }</Text>
            <Text style = { style.title }>{ title }</Text>
            <View style = { styles.buttonSection }>
              <TouchableHighlight style = { [styles.button, styles.whiteButton ]}>
                <Text style = { [styles.textWhiteButton, styles.textButton ] }>{'Get to know me'.toUpperCase()}</Text>
              </TouchableHighlight>
              <TouchableHighlight style = { [styles.button, styles.blueButton ]}>
                <Text style = { [styles.textBlueButton, styles.textButton ] }>{'Read my process'.toUpperCase() }</Text>
              </TouchableHighlight>
            </View>
        </View>
        <View style = { styles.container }>
          <MiniPost miniPost = { latest_post }/>
        </View>
      </View>
    );
  }
}

export default Home;
