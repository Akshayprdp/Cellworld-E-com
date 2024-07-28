import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Loginpage from '../Pages/Admin/Loginpage'
import Productaddpage from '../Pages/Admin/Productaddpage'
import Productlistpage from '../Pages/Admin/Productlistpage'
import Userlistpage from '../Pages/Admin/Userlistpage'
import Categorypage from '../Pages/Admin/Categorypage'
import AdminProtectRoute from '../Components/Admin/AdminProtectedRoute/AdminProtectRoute'
import Producteditpage from '../Pages/Admin/Producteditpage'


function Adminrouter() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Loginpage/>}/>
        <Route path='/Productadd' element={<AdminProtectRoute element={<Productaddpage/>}/>}/>
        <Route path='/productlist' element={<AdminProtectRoute element={<Productlistpage/>}/>}/>
        <Route path='/userlist' element={<AdminProtectRoute element={<Userlistpage/>}/> }/>
        <Route path='/category' element={<AdminProtectRoute  element={<Categorypage/>}/>}/>
        {/* <Route path='/productedit' element={<Producteditpage/>}/> */}
        <Route path="/productedit/:productId" element={<AdminProtectRoute element={<Producteditpage />}/>} />
        
      </Routes>
      
    </div>
  )
}

export default Adminrouter
