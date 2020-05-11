import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button, Avatar, Text, Divider } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';

const AuthForm = ({ text, onSubmit, error }) => {
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
      <View style={{ position: 'relative', alignSelf: 'center' }}>
        <Text
          h3
          style={{
            alignSelf: 'center',
            marginVertical: 40,
            color: 'rgb(30, 30, 30)',
          }}
        >
          NOTES
        </Text>
        <Avatar
          size={50}
          source={require('../../assets/logo.png')}
          containerStyle={{
            alignSelf: 'center',
            position: 'absolute',
            left: -70,
            top: 27,
          }}
          placeholderStyle={{ backgroundColor: 'transparent' }}
        />
      </View>
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
      />
      <Divider style={{ marginTop: 30 }} />
    </View>
  );
};

export default AuthForm;
