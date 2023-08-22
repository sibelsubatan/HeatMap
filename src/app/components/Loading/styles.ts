import {type TextStyle, type ImageStyle, type ViewStyle} from 'react-native';
import theme from '@src/app/theme';

export const splashContainer: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.colors.BUTTON_COLOR,
  position: 'relative',
};

export const indicatorContainer: ViewStyle = {
  position: 'absolute',
  bottom: 20,
  right: 0,
  left: 0,
};

export const slide: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-evenly',
  backgroundColor: theme.colors.LIGHT_BLUE,
};

export const title: TextStyle = {
  fontSize: 28,
  color: theme.colors.NAVIGATION_COLOR,
  textAlign: 'center',
  fontWeight: 'bold',
};

export const desc: TextStyle = {
  color: theme.colors.NAVIGATION_COLOR,
  textAlign: 'center',
  width: '90%',
  fontSize: 17,
};

export const buttonCircle: ViewStyle = {
  backgroundColor: theme.colors.MAIN_BLUE,
  width: 40,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 20,
};

export const artContainer: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
};

export const iconContainer: ViewStyle = {
  backgroundColor: theme.colors.DARK_BLUE,
  width: 90,
  height: 90,
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
};

export const splashLogo: ImageStyle = {
  width: 150,
  height: 150,
  resizeMode: 'contain',
};

export const logo: ImageStyle = {
  width: 90,
  height: 90,
  borderRadius: 10,
};
