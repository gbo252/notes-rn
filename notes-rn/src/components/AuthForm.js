import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';

const AuthForm = ({ text, onSubmit, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <NavigationEvents
        onWillFocus={() => {
          setEmail('');
          setPassword('');
        }}
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholder="email"
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        placeholder="password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        autoCompleteType="off"
        clearButtonMode="while-editing"
        textContentType="none"
      />
      <Button title={text} onPress={() => onSubmit({ email, password })} />
      {error ? (
        <Text style={{ color: 'red', marginLeft: 10 }}>{error}</Text>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 25,
    margin: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default AuthForm;
