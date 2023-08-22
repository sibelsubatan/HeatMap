import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import theme from '@app/theme';

export const container = {
  flex: 1,
  backgroundColor: theme.colors.LOGIN_INPUT_BG,
  width: theme.DEVICE_WIDTH,
  height: theme.DEVICE_HEIGHT,
  justifyContent: 'center',
} as ViewStyle;

export const inputContain = {
  flex: 1,
  backgroundColor: theme.colors.LOGIN_INPUT_BG,
  width: theme.DEVICE_WIDTH,
  height: theme.DEVICE_HEIGHT,
  justifyContent: 'center',
  paddingHorizontal: 10,
} as ViewStyle;

export const iconView = {
  alignSelf: 'center',
} as ViewStyle;

export const textInputView = {
  width: theme.DEVICE_WIDTH * 0.8,
  alignSelf: 'center',
  marginVertical: 10,
  borderWidth: 0.6,

  minHeight: 50,
  borderRadius: 10,
  paddingHorizontal: 10,
} as ViewStyle;

export const buttonView = {
  width: theme.DEVICE_WIDTH * 0.8,
  alignSelf: 'center',
  justifyContent: 'center',
  backgroundColor: theme.colors.BUTTON_COLOR,
  marginVertical: 10,
  minHeight: 50,
  borderRadius: 10,
} as ViewStyle;

export const image = {
  flex: 1,
  justifyContent: 'center',
} as ImageStyle;

export const buttonText = {
  color: theme.colors.WHITE,
  alignSelf: 'center',
  fontSize: 16,
  fontWeight: 'bold',
} as TextStyle;
