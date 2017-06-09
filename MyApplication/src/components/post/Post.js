import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import style from '../../styles/Basic.styles';
import styles from '../../styles/Post.styles';
import Content from './Content.js';

class Post extends Component {
  render () {
    const {
      title,
      author,
      time,
      image,
      image_video,
      h1_title,
      text1,
      text2,
      subject,
      quote,
      quote_author,
      quote_author_position,
      next_post_title,
      next_post_time,
      latest_post_title,
      latest_post_time,
    } = this.props.blog;

    const {
      idNext,
      idBack,
    } = this.props;

    return (
      <View>
        <View style = { style.header }>
          <View style = { styles.subjectSegment }>
            <Text style = { styles.subject }>{ subject.toUpperCase() }</Text>
          </View>
          <Text style = { style.title }>{ title }</Text>
          <View style = { styles.authorSegment }>
            <Text style = {[ styles.author, styles.authorStyle ]}>By { author }</Text>
            <View style = { styles.timeSegment }>
              <Image source = {require('../../assets/shape.png')}/>
              <Text style = {[ styles.time, styles.authorStyle ]}>{ time } read</Text>
            </View>
          </View>
        </View>
        <View style = { styles.imageContainer }>
          <Image style = { styles.video } source = {{uri: image_video }}/>
        </View>
        <View style = { styles.information }>
          <View style = { styles.container }>
            <Text style = { styles.title }>{ h1_title }</Text>
            <Content content = { text1 }/>
            <View style = { styles.imageContainer }>
              <Image style = { styles.image } source = {{ uri: image }}/>
            </View>
            <View style = { styles.quoteSegment }>
              <Text style = { styles.quote }>{ quote }</Text>
              <Text style = { styles.quoteAuthor }>{ quote_author } |</Text>
              <Text style = { styles.quoteAuthor }>{ quote_author_position }</Text>
            </View>
            <Content content = { text2 }/>
          </View>
        </View>
      </View>
    )

  }

}

export default Post;
