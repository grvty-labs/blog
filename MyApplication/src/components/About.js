import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import style from '../styles/Basic.styles';
import Paragraph from './Paragraph.js';

class About extends Component {
  render () {
    const {
      about,
    } = this.props;

    return (
      <View>
        <View style = { style.header }>
          <Text style = { style.subtitle }>ABOUT</Text>
          <Text style = { style.title }>Nice to meet you. There are some things
          you should know about me.</Text>
        </View>
        <View>
          <Paragraph paragraph = { about }/>
        </View>
      </View>
    )
  }
}

export default About;
