import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import App from './App';
import StorybookUIRoot from './.rnstorybook';
import {name as appName} from './app.json';

const SHOW_STORYBOOK = __DEV__ && false;

AppRegistry.registerComponent(appName, () =>
  SHOW_STORYBOOK ? StorybookUIRoot : App,
);
