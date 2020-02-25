import {Platform, StyleSheet, Dimensions} from 'react-native';
import Colors from './Colors';

const Buttons = StyleSheet.create({
  regular: {
    width: 100,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  myLyrics: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: Colors.regular,
    borderRadius: 10,
    padding: 5,
  },
  search: {
    position: 'absolute',
    left: 20,
    bottom: 20,
    backgroundColor: Colors.regular,
    borderRadius: 10,
    padding: 5,
  },
});

export default Buttons;
