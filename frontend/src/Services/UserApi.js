import {userInstance} from "../Axios/Axiosinstance"
import axios from 'axios';

export const userRegister=(values)=>{
    return userInstance.post("/signup",{...values})
}

export const userLogin = (values) => {
    return userInstance.post("/login", { ...values });
};


export const authenticatedRequest = async (method, url, data) => {
    const token = localStorage.getItem('token');
    const config = {
        headers: { Authorization: token }
    };
    return await axios({ method, url, data, ...config });
};
