import {Dimensions, type FlexAlignType} from 'react-native';
import palette from './colors';
import flex from './flex';
import globalMarginStyles from './margin';
import globalPaddingStyles from './padding';
import typography from './fonts';
const {width, height} = Dimensions.get('window');

const theme = {
  colors: {
    ...palette,
  },
  flex: {
    ...flex,
  },
  ...typography,
  ...globalMarginStyles,
  paddings: {
    ...globalPaddingStyles,
  },
  config: {
    initialColorMode: 'light',
  },
  DEVICE_WIDTH: width,
  DEVICE_HEIGHT: height,
  border_radius: 20,
  directionRow: {
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row' as 'row',
    alignItems: 'center' as FlexAlignType,
  },
  shadow: {
    elevation: 6,
    shadowColor: palette.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
  },
};

export type Theme = typeof theme;
export default theme;
