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

export const getProductById = (productId) => {
  return adminInstance.get(`/product/${productId}`);
};

export const updateProduct=(productId, productInfo)=>{
  console.log(productInfo);
  // return adminInstance.put(`/updateproduct/${productId}`,productInfo)
}


export const updateUserStatus = async (userId, data) => {
  return await adminInstance.put(`/user/status/${userId}`, data);
};