/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App';
import HomeScreen from './src/screens/HomeScreen';

AppRegistry.registerComponent(appName, () => HomeScreen);
