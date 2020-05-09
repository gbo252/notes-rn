import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
  baseURL: 'http://192.168.1.27:3000',
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('@notes/token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

export default instance;
