import React, { useContext } from 'react';
import { Text, Button } from 'react-native';
import { NavigationEvents } from 'react-navigation';

import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const Signin = ({ navigation }) => {
  const { state, signin, clearError } = useContext(AuthContext);

  return (
    <>
      <NavigationEvents onWillFocus={clearError} />
      <Text style={{ fontSize: 50 }}>Signin</Text>
      <AuthForm text="Sign In" onSubmit={signin} error={state.error} />
      <Button
        title="Go to Sign Up"
        onPress={() => navigation.navigate('Signup')}
      />
    </>
  );
};

export default Signin;
