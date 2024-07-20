// Productlist.js
import React, { useEffect, useState } from 'react';
import './Productlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faBan } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { getproductlist } from '../../../Services/AdminApi';

const Productlist = () => {
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getproductlist();
        setProductList(response.data.productlist);
      } catch (error) {
        console.error('Error fetching product data', error);
      }
    };
    fetchProducts();
  }, []);

  const handleEditClick = (productId) => {
    navigate(`/admin/productedit/${productId}`);
  };

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
            {productList.map((product) => (
              <tr key={product._id}>
                <td>{product.productName}</td>
                <td>10</td> {/* Placeholder for quantity */}
                <td>₹{product.price}</td>
                <td>
                  <button className="edit-button" onClick={() => handleEditClick(product._id)}>
                    <FontAwesomeIcon icon={faEdit} /> Edit
                  </button>
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
};

export default Productlist;
