import React, { useContext } from 'react';
import { Text, Button } from 'react-native';
import { NavigationEvents } from "react-navigation";

import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const Signup = ({ navigation }) => {
  const { state, signup, clearError } = useContext(AuthContext);

  return (
    <>
      <NavigationEvents onWillFocus={clearError} />
      <Text style={{ fontSize: 50 }}>Signup</Text>
      <AuthForm text="Sign Up" onSubmit={signup} error={state.error} />
      <Button
        title="Go to Sign In"
        onPress={() => navigation.navigate('Signin')}
      />
    </>
  );
};

export default Signup;
