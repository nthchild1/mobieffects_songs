import {StyleSheet} from 'react-native';

const Typo = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  tiny: {
    fontSize: 10,
  },
  small: {
    fontSize: 14,
  },
  medium: {
    fontSize: 18,
  },
  large: {
    fontSize: 22,
  },
  extra: {
    fontSize: 30,
  },
  alt: {
    fontFamily: 'Rajdhani-Regular',
  },
  altBold: {
    fontFamily: 'Rajdhani-Bold',
    letterSpacing: 2,
  },
  alt2: {
    fontFamily: 'FugazOne-Regular',
  },
  lineSmall: {
    lineHeight: 16,
  },
  lineMedium: {
    lineHeight: 21,
  },
  lineLarge: {
    lineHeight: 25,
  },
  lineExtra: {
    lineHeight: 34,
  },
  centerP: {
    marginVertical: 10,
    textAlign: 'center',
  },
  shadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});

export default Typo;
