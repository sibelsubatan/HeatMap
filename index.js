import {AppRegistry, LogBox} from 'react-native';
import App from '@src/App';
import {name as appName} from '@root/app.json';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
  'NativeBase: The contrast ratio of',
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]); // Ignore log notification by message

LogBox.ignoreAllLogs(true);
AppRegistry.registerComponent(appName, () => App);
