import {
  StyleSheet,
} from 'react-native';

export default styles = StyleSheet.create({

  button: {
    width:207,
    height:49,
    borderRadius:5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  whiteButton: {
    borderWidth: 1,
    borderColor: '#4582ca',
  },

  blueButton: {
    backgroundColor: '#4582ca',
    marginTop:40,
  },

  textButton:{
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'bold',
  },

  textWhiteButton: {
    color: '#8e8e8e',
  },

  textBlueButton: {
    color: '#fff',
  },

  buttonSection: {
    paddingTop:40,
    paddingBottom:40,
  },

  container: {
    paddingRight:10,
    paddingLeft:10,
  }

});
