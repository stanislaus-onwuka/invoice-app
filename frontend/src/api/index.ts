import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

const auth = useAuth();

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

api.interceptors.request.use(async (config) => {
  const user = auth?.user
  if (user) {
    const token = await user.getIdToken();
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
