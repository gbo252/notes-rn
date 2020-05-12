import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { ThemeProvider } from 'react-native-elements';

import theme from './src/theme';
import Auth from './src/screens/Auth';
import Signup from './src/screens/Signup';
import Signin from './src/screens/Signin';
import Notes from './src/screens/Notes';
import Note from './src/screens/Note';
import NewNote from './src/screens/NewNote'
import Account from './src/screens/Account';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as NotesProvider } from './src/context/NotesContext';
import { setNavigator } from './src/navigationRef';

const authStack = createStackNavigator({
  Signin,
  Signup,
});

const mainApp = createStackNavigator({
  Notes,
  Note,
  NewNote,
  Account,
});

const navigator = createSwitchNavigator({
  Auth,
  authStack,
  mainApp,
});

const App = createAppContainer(navigator);

export default () => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <NotesProvider>
        <App ref={setNavigator} />
      </NotesProvider>
    </AuthProvider>
  </ThemeProvider>
);
