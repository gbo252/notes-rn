import React, { useEffect, useContext } from 'react';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Context as AuthContext } from '../context/AuthContext';

const Auth = () => {
  const { tryLocalSignin } = useContext(AuthContext);
  const [fontsLoaded] = useFonts({
    ComicNeue: require('../../assets/fonts/ComicNeue-Regular.ttf'),
    ComicNeueBold: require('../../assets/fonts/ComicNeue-Bold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      tryLocalSignin();
    }
  }, [fontsLoaded]);

  return <AppLoading />;
};

export default Auth;
