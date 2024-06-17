import React, { useEffect, useState } from 'react';
import './Productlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faBan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getproductlist } from '../../../Services/AdminApi';


const Productlist=()=>{
  const[productlist,setproductlist]=useState([])

  useEffect(()=>{
    const fetchproducts=async()=>{
      try{
        const response=await getproductlist()
        setproductlist(response.data.productlist)
      }catch(error){
        console.error('error fetching productdata',error)
      }
    }
    fetchproducts()
  })



  return (
    <div className="product-list">
      <div className="product-list-container">
        <table className="product-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {productlist.map(product=>(
            <tr key={product._id}>
              <td>{product.productName}</td>
              <td>10</td>
              <td>{product.price}</td>
              <td>
              <Link to="/admin/productedit">
                    <button className="edit-button">
                      <FontAwesomeIcon icon={faEdit} /> Edit
                    </button>
                  </Link>
                <button className="dis-button">
                  <FontAwesomeIcon icon={faBan} />
                </button>
              </td>
            </tr>
))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Productlist;
