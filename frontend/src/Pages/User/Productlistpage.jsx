import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Header from '../../Components/User/Header/Header';
import List from '../../Components/User/Listofproducts/List';
import Footer from '../../Components/User/Footer/Footer';


function Productlistpage() {
  return (
    <div>
      <Header/>
      <List/>
      <Footer/>
    </div>
  )
}

export default Productlistpage
