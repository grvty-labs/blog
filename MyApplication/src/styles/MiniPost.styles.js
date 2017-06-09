import {
  StyleSheet,
} from 'react-native';

export default styles = StyleSheet.create({
  title: {
    fontFamily: 'Catamaran',
    fontSize: 25,
    lineHeight:23,
    color: '#323c47',
    paddingLeft: 10,
  },

  miniPost: {
    paddingTop:20,
    paddingBottom:20,
  },

  timeSegment: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop:20,
    paddingLeft:10,
  },

  time: {
    color: '#989898',
    fontSize: 14,
    fontFamily: 'Catamaran',
    paddingLeft:5,
  },

  image: {
    width: 317,
    height: 252,
  },

  imageSegment: {
    display:'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: 20,
  },

  postContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  }
})
