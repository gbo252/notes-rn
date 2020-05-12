import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button, Divider } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';

import LogoHeader from './LogoHeader';

const AuthForm = ({ text, onSubmit, loading, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ marginHorizontal: 15 }}>
      <NavigationEvents
        onWillFocus={() => {
          setEmail('');
          setPassword('');
        }}
      />
      <LogoHeader />
      <Input
        value={email}
        label="Email Address"
        onChangeText={setEmail}
        placeholder="Email"
        leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'gray' }}
        leftIconContainerStyle={{ marginRight: 5 }}
        containerStyle={{ marginBottom: 5 }}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <Input
        value={password}
        label="Password"
        onChangeText={setPassword}
        placeholder="Password"
        leftIcon={{ type: 'font-awesome', name: 'key', color: 'gray' }}
        leftIconContainerStyle={{ marginRight: 5 }}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        autoCompleteType="off"
        clearButtonMode="while-editing"
        textContentType="none"
        errorMessage={error}
        errorStyle={{ marginTop: 5 }}
      />
      <Button
        title={text}
        containerStyle={{ marginTop: 20, alignSelf: 'center' }}
        buttonStyle={{
          backgroundColor: '#b56d34',
          borderColor: 'transparent',
          paddingHorizontal: 20,
        }}
        type="solid"
        onPress={() => onSubmit({ email, password })}
        loading={loading}
      />
      <Divider style={{ marginTop: 30 }} />
    </View>
  );
};

export default AuthForm;
