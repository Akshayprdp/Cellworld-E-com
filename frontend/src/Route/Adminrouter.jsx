import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Loginpage from '../Pages/Admin/Loginpage'
import Productaddpage from '../Pages/Admin/Productaddpage'
import Productlistpage from '../Pages/Admin/Productlistpage'
import Userlistpage from '../Pages/Admin/Userlistpage'
import Categorypage from '../Pages/Admin/Categorypage'

import Producteditpage from '../Pages/Admin/Producteditpage'


function Adminrouter() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Loginpage/>}/>
        <Route path='/Productadd' element={<Productaddpage/>}/>
        <Route path='/productlist' element={<Productlistpage/>}/>
        <Route path='/userlist' element={<Userlistpage/>}/>
        <Route path='/category' element={<Categorypage/>}/>
        {/* <Route path='/productedit' element={<Producteditpage/>}/> */}
        <Route path="/productedit/:productId" element={<Producteditpage />} />
        
      </Routes>
      
    </div>
  )
}

export default Adminrouter
