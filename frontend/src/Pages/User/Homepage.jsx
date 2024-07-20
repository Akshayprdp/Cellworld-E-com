import React from 'react'
import Header from '../../Components/User/Header/Header'
import Home from '../../Components/User/Home/Home'
import Footer from '../../Components/User/Footer/Footer'
import 'react-toastify/dist/ReactToastify.css';
import PhoneStore from '../../Components/User/PhoneStore/PhoneStore'


function Homepage() {
  return (
    <div>
      <Header/>
      <Home/>
      <PhoneStore/>
      <Footer/>
    </div>
  )
}

export default Homepage
