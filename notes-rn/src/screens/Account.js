import React, { useContext } from 'react';
import { View } from 'react-native';
import { Button, Text, Divider } from 'react-native-elements';

import { Context as AuthContext } from '../context/AuthContext';
import LogoHeader from '../components/LogoHeader';

const Account = () => {
  const { signout } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 15 }}>
      <View style={{ position: 'absolute', top: 0, width: '100%' }}>
        <LogoHeader />
        <Divider />
      </View>
      <Text style={{ fontSize: 20, alignSelf: 'center' }}>
        Thank you for using Notes!
      </Text>
      <Button
        title="Sign Out"
        containerStyle={{ marginTop: 20, alignSelf: 'center' }}
        buttonStyle={{
          backgroundColor: '#b56d34',
          borderColor: 'transparent',
          paddingHorizontal: 20,
        }}
        type="solid"
        onPress={signout}
      />
    </View>
  );
};

Account.navigationOptions = {
  headerTitleStyle: { fontFamily: 'ComicNeueBold' },
};

export default Account;
