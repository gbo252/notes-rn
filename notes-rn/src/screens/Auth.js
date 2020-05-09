import { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const Auth = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return null;
};

export default Auth;
