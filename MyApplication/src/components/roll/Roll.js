import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import style from '../../styles/Basic.styles';
import MiniPost from './MiniPost.js';

class Roll extends Component {
  render () {
    const {
      title,
      subtitle,
      posts,
    } = this.props;

    return (
      <View>
        <View style = { style.header }>
          <Text style = { style.subtitle }>{ subtitle }</Text>
          <Text style = { style.title }>{ title }</Text>
        </View>
          <MiniPost miniPost = { posts }/>
      </View>
    )
  }
}

export default Roll;
