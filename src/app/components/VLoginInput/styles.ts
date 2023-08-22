import type {ViewStyle} from 'react-native';
import theme from '../../theme';

export const container: ViewStyle = {
  paddingHorizontal: 10,
  paddingVertical: 4,
  borderRadius: 10,
  backgroundColor: theme.colors.LOGIN_INPUT_BG,
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  alignSelf: 'center',
  marginVertical: 10,
  borderWidth: 0.5,
};

export const input: ViewStyle = {
  height: 50,
  // backgroundColor: theme.colors.LOGIN_INPUT_BG,
  paddingHorizontal: 10,
  flex: 1,
};
