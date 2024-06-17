import { adminInstance } from '../Axios/Axiosinstance';
import axios from 'axios';

export const getUserList = () => {
  return adminInstance.get('/users');
};

export const adminLogin = (values) => {
  return adminInstance.post("/adminlogin", values);
};

export const productadd=(values)=>{
  return adminInstance.post("/productadd",values);
}

export const getproductlist = () => {
  return adminInstance.get('/productlist');
};