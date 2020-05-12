import React, { useContext } from 'react';
import { Text, Button } from 'react-native';

import { Context as AuthContext } from '../context/AuthContext';

const Account = () => {
  const { signout } = useContext(AuthContext);

  return (
    <>
      <Text style={{ fontSize: 50 }}>Account</Text>
      <Button title="Click here to sign out" onPress={signout} />
    </>
  );
};

Account.navigationOptions = {
  headerTitleStyle: { fontFamily: 'ComicNeueBold' },
};

export default Account;
