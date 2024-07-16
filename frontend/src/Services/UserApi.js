import {userInstance,Hostedapiinstance} from "../Axios/Axiosinstance"
import axios from 'axios';

export const userRegister=(values)=>{
    return userInstance.post("/signup",{...values})
}

export const userLogin = (values) => {
    return userInstance.post("/login", { ...values });
};


// export const userLogin = (values) => {
//     return Hostedapiinstance.post("/login", { ...values });
// };


export const getproducts = () => {
    return userInstance.get('/products');
  };

  
// export const getproducts = () => {
//     return Hostedapiinstance.get('/products');
//   };


export const getProductById = (id) => {
    return userInstance.get(`/products/${id}`);
  };
  
  export const getCartItems = (userId) => {
    return userInstance.get(`/api/cart/${userId}`);
  };
  

  export const updateCartItem = (userId, productId, quantity) => {
    return userInstance.put(`/api/cart/update/${userId}`, { productId, quantity });
  };
  
  export const removeCartItem = (userId, productId) => {
    return userInstance.delete(`/api/cart/remove/${userId}/${productId}`);
  };
  

  export const getWishlistItems = (userId) => {
    return userInstance.get(`/wishlist/${userId}`);
  };
  
  export const removeWishlistItem = (userId, itemId) => {
    return userInstance.post('/wishlist/remove', { userId, productId: itemId });
  };

  // import axios from 'axios';

  // const authenticatedRequest = async (method, url, data) => {
  //     const token = localStorage.getItem('jwt');
  //     const config = {
  //         headers: { Authorization: `Bearer ${token}` },
  //     };
  //     return await axios({ method, url: `/api${url}`, data, ...config }); // Ensure URL is prefixed with /api
  // };
  
  export const updateProfile = (userInfo) => {
      return userInstance.put('api/updateProfile', userInfo); 
  };
  