import {ImageStyle, ViewStyle} from 'react-native';
import theme from '@app/theme';

export const splashContainer = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.WHITE,
  position: 'relative',
} as ViewStyle;

export const indicatorContainer = {
  position: 'absolute',
  bottom: 20,
  right: 0,
  left: 0,
} as ViewStyle;

export const slide = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-evenly',
  backgroundColor: theme.WHITE,
} as ViewStyle;

export const title = {
  fontSize: 28,
  color: theme.NAVIGATION_COLOR,
  textAlign: 'center',
  fontWeight: 'bold',
} as ViewStyle;

export const desc = {
  color: theme.NAVIGATION_COLOR,
  textAlign: 'center',
  width: '90%',
  fontSize: 17,
} as ViewStyle;

export const buttonCircle = {
  backgroundColor: theme.APPCOLOR,
  width: 40,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 20,
} as ViewStyle;

export const artContainer = {
  flexDirection: 'row',
  alignItems: 'center',
} as ViewStyle;

export const iconContainer = {
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
} as ViewStyle;

export const splashLogo = {
  width: 150,
  height: 150,
  resizeMode: 'contain',
} as ImageStyle;

export const logo = {
  width: theme.DEVICE_WIDTH,
  height: 100,
  resizeMode: 'contain',
} as ImageStyle;
