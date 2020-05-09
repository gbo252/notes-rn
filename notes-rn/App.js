import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Signup from './src/screens/Signup';
import Signin from './src/screens/Signin';
import Notes from './src/screens/Notes';
import Account from './src/screens/Account';

const authStack = createStackNavigator({
  Signup,
  Signin,
});

const mainApp = createBottomTabNavigator({
  Notes,
  Account,
});

const navigator = createSwitchNavigator({
  authStack,
  mainApp,
});

export default createAppContainer(navigator);
