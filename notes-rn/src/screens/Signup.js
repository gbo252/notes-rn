import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';

import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const Signup = ({ navigation }) => {
  const { state, signup, clearError } = useContext(AuthContext);

  return (
    <ScrollView>
      <NavigationEvents onWillFocus={clearError} />
      <AuthForm text="Sign Up" onSubmit={signup} error={state.error} />
      <Button
        title="If you already have an account, click here to Sign In!"
        onPress={() => navigation.navigate('Signin')}
        type="clear"
        containerStyle={{ margin: 15 }}
        titleStyle={{ fontSize: 16 }}
      />
    </ScrollView>
  );
};

Signup.navigationOptions = {
  title: 'Sign Up',
  headerLeft: () => null,
  headerTitleStyle: { fontFamily: 'ComicNeueBold' },
};

export default Signup;
