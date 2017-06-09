import {
  StyleSheet,
} from 'react-native';

export default styles = StyleSheet.create({

  subject: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#4da1ff',
    width: 60,
    paddingBottom:5,
    paddingTop:5,
    borderRadius: 5,
  },

  subjectSegment:{
    paddingBottom:10,
  },

  authorSegment:{
    display: 'flex',
    flexDirection: 'row',
  },

  timeSegment:{
    display: 'flex',
    flexDirection: 'row',
    paddingLeft:20,
  },

  author:{
    fontSize: 15,
  },

  authorStyle:{
    color: '#989898',
    fontFamily: 'Roboto',
  },

  time:{
    fontSize: 14,
    paddingLeft:5,
  },

  video:{
    width: 360,
    height: 647,
  },

  imageContainer:{
    paddingTop: 30,
    paddingBottom: 30,
  },

  title:{
    fontFamily: 'Catamaran',
    fontSize: 30,
    lineHeight: 36,
    color: '#323c47',
  },

  information:{
    display: 'flex',
    alignItems: 'center',
    paddingBottom:40,
  },

  container:{
    width: 298,
  },

  image:{
    width: 315,
    height: 195,
  },

  quoteSegment:{
    display: 'flex',
    alignItems: 'center',
    paddingTop:30,
    paddingBottom: 30,
    backgroundColor: '#fafbfb',
  },

  quote:{
    fontFamily: 'MavenPro',
    fontSize: 23,
    lineHeight: 26,
    color: '#323c47',
    paddingTop:10,
    paddingBottom:30,
    textAlign: 'center',
  },

  quoteAuthor:{
    fontFamily: 'Roboto',
    color: '#989898',
    fontSize: 16,
    lineHeight: 28,

  }

})
