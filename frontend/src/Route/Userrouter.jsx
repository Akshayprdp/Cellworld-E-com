import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Loginpage from '../Pages/User/Loginpage';
import Registrationpage from '../Pages/User/Registrationpage';
import Homepage from '../Pages/User/Homepage';
import Singleproductlistpage from '../Pages/User/Singleproductlistpage';
import Cartpage from '../Pages/User/Cartpage';
import Categorypage from '../Pages/User/Categorypage';
import Wishlistpage from '../Pages/User/Wishlistpage';
import Profilepage from '../Pages/User/Profilepage';
import Productlistpage from '../Pages/User/Productlistpage';
import ProtectedRoute from '../Components/User/ProtectedRoute/ProtectedRoute';

function Userrouter() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Loginpage />} />
        <Route path='/signup' element={<Registrationpage />} />
        <Route path='/' element ={<Homepage/>}  />
        <Route path='/product/:id' element={<Singleproductlistpage/>} />
        <Route path='/cart'  element ={<ProtectedRoute element={<Cartpage />}/>} />
        <Route path='/category' element={<Categorypage />} />
        <Route path='/wishlist'  element ={<ProtectedRoute element={<Wishlistpage/>}/>} />
        <Route path='/profile' element ={<ProtectedRoute element={<Profilepage/>}/>} />
        <Route path='/list/:category' element={<Productlistpage />} />
        <Route path='*' element={<Homepage/>}/>
      </Routes>
    </div>
  );
}

export default Userrouter;
