import React from 'react';
import { Text, Button, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

type Props = {
  navigation: NavigationStackProp;
};

const Signin = ({ navigation }: Props) => {
  return (
    <View>
      <Text style={{ fontSize: 50 }}>Signin</Text>
      <Button
        title="Go to Sign Up"
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
};

export default Signin;
