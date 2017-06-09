import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import styles from '../styles/About.styles';

class Paragraph extends Component {
  render() {

    let paragraph = this.props.paragraph.map((element, index) =>(
      <View style = { styles.container } key = { index }>
          <View style = { styles.upRow }>
            <Image source = { require('../assets/ipad.png') }/>
          </View>
          <View>
            <Text style = { styles.title }>{ element.title }</Text>
            <Text style = { styles.text }>{ element.content }</Text>
          </View>
      </View>
    ));

    return (
      <View style = { styles.content }>
        { paragraph }
      </View>
    )
  }
}

export default Paragraph;
