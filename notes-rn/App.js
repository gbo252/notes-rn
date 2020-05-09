import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Auth from './src/screens/Auth';
import Signup from './src/screens/Signup';
import Signin from './src/screens/Signin';
import Notes from './src/screens/Notes';
import Account from './src/screens/Account';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';

const authStack = createStackNavigator({
  Signin,
  Signup,
});

const mainApp = createBottomTabNavigator({
  Notes,
  Account,
});

const navigator = createSwitchNavigator({
  Auth,
  authStack,
  mainApp,
});

const App = createAppContainer(navigator);

export default () => (
  <AuthProvider>
    <App ref={setNavigator} />
  </AuthProvider>
);
