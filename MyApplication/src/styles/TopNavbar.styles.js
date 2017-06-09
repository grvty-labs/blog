import {
  StyleSheet,
} from 'react-native';

export default styles = StyleSheet.create({
  logoStyle: {
    fontFamily: 'Roboto',
    fontSize: 32,
    color: '#323c47',
    lineHeight: 40,
  },

  logoBlueStyle: {
      color: '#48d5f6',
      fontFamily: 'RobotoSlab',
      fontSize:32,
      lineHeight: 40,
  },

  logoImage: {
    height:30,
    width:30,
  },

  leftColumn: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 5,
  },

  rightColumn: {
    paddingTop:5,
    paddingRight: 5,
  },

  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  openedMenu: {
    opacity:1,
    flex: 1,

  },

  closedMenu:{
    opacity:0,
    display: 'none',
  },
});
