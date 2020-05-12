import React from 'react';
import { View } from 'react-native';
import { Avatar, Text } from 'react-native-elements';

const LogoHeader = () => {
  return (
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
          left: -60,
          top: 25,
        }}
        placeholderStyle={{ backgroundColor: 'transparent' }}
      />
    </View>
  );
};

export default LogoHeader;
