import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import { Link } from 'react-router-native';
import styles from '../../styles/MiniPost.styles';

class MiniPost extends Component {
  render () {
    let miniPost = this.props.miniPost.map((element, index) => (
      <Link style = { styles.miniPost } key = { index } to = { '/post/'+ element.id }>
        <View>
          <View style = { styles.imageSegment }>
            <Image style= { styles.image } source = {{uri:element.image }}></Image>
          </View>
          <View>
            <Text style = { styles.title }>{ element.title }</Text>
            <View style = { styles.timeSegment }>
              <Image source = {require('../../assets/shape.png')}/>
              <Text style = { styles.time }>{ element.time }</Text>
            </View>
          </View>
        </View>
      </Link>
    ));

    return (
      <View style = { styles.postContainer }>
        { miniPost }
      </View>
    )
  }
}

export default MiniPost;
