import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';

import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const Signin = ({ navigation }) => {
  const { state, signin, clearError } = useContext(AuthContext);

  return (
    <ScrollView>
      <NavigationEvents onWillFocus={clearError} />
      <AuthForm text="Sign In" onSubmit={signin} error={state.error} />
      <Button
        title="If you haven't already registered, click here to Sign Up!"
        onPress={() => navigation.navigate('Signup')}
        type="clear"
        containerStyle={{ margin: 15 }}
        titleStyle={{ fontSize: 16 }}
      />
    </ScrollView>
  );
};

Signin.navigationOptions = {
  title: 'Sign In',
  headerLeft: () => null,
  headerTitleStyle: { fontFamily: 'ComicNeueBold' },
};

export default Signin;
