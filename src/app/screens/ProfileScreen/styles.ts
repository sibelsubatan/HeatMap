import {TextStyle, ViewStyle} from 'react-native';
import theme from '@src/app/theme';

export const container: ViewStyle = {
  flex: 1,
  backgroundColor: theme.colors.LOGIN_INPUT_BG,
};

export const itemView: ViewStyle = {
  marginHorizontal: 10,
  marginVertical: 10,
};
export const itemText: TextStyle = {
  color: theme.colors.BLACK,
  fontSize: theme.fontSizes.sm,
  fontWeight: '400',
  marginVertical: 5,
};

export const textView: ViewStyle = {
  paddingVertical: 12,
  paddingHorizontal: 10,
  borderColor: theme.colors.LIGHT_GRAY,
  borderWidth: 1,
  borderRadius: 7,
};
