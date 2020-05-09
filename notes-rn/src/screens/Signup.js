import React from 'react';
import { Text, Button, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

type Props = {
  navigation: NavigationStackProp;
};

const Signup = ({ navigation }: Props) => {
  return (
    <View>
      <Text style={{ fontSize: 50 }}>Signup</Text>
      <Button
        title="Go to Sign In"
        onPress={() => navigation.navigate('Signin')}
      />
    </View>
  );
};

export default Signup;
