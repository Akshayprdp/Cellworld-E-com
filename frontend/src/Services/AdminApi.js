import { adminInstance } from '../Axios/Axiosinstance';
import axios from 'axios';

export const getUserList = () => {
  return adminInstance.get('/users');
};

export const adminLogin = (values) => {
  return adminInstance.post("/adminlogin", values);
};
