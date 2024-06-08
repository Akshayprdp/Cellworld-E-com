import { adminInstance } from '../Axios/Axiosinstance';

export const getUserList = () => {
  return adminInstance.get('/users');
};
