import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from '../../styles/Content.styles';

class Content extends Component {
  render () {
    let content = this.props.content.map((element, index) => (
      <View style = { styles.paragraph } key = { index }>
        <Text style = { styles.text }>{ element }</Text>
      </View>
    ));

    return (
      <View>
        { content }
      </View>
    )
  }
}


export default Content;
