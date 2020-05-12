import { AsyncStorage } from 'react-native';

import createDataContext from './createDataContext';
import notesApi from '../api/notes';
import { navigate } from '../navigationRef';

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case 'sign_in':
      return { token: payload, loading: false, error: '' };
    case 'sign_out':
      return { token: null, loading: false, error: '' };
    case 'set_loading_true':
      return { ...state, loading: true };
    case 'add_error':
      return { ...state, error: payload, loading: false };
    case 'clear_error':
      return { ...state, error: '', loading: false };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  dispatch({ type: 'set_loading_true' });
  try {
    const response = await notesApi.post('/signup', { email, password });
    await AsyncStorage.setItem('@notes/token', response.data.token);
    dispatch({ type: 'sign_in', payload: response.data.token });
    navigate('Notes');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: err?.response?.data?.error || 'server error',
    });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  dispatch({ type: 'set_loading_true' });
  try {
    const response = await notesApi.post('/signin', { email, password });
    await AsyncStorage.setItem('@notes/token', response.data.token);
    dispatch({ type: 'sign_in', payload: response.data.token });
    navigate('Notes');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: err?.response?.data?.error || 'server error',
    });
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('@notes/token');
  if (token) {
    dispatch({ type: 'sign_in', payload: token });
    navigate('Notes');
  } else {
    navigate('Signin');
  }
};

const signout = (dispatch) => async () => {
  dispatch({ type: 'set_loading_true' });
  await AsyncStorage.removeItem('@notes/token');
  dispatch({ type: 'sign_out' });
  navigate('Signin');
};

const clearError = (dispatch) => () => {
  dispatch({ type: 'clear_error' });
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout, tryLocalSignin, clearError },
  { token: null, loading: false, error: '' }
);
