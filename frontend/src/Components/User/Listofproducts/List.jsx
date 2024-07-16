import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getproducts } from '../../../Services/UserApi';
import "./List.css";
import { Link } from 'react-router-dom';

const List = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getproducts();
        if (response.data.status) {
          const filteredProducts = response.data.products.filter(product => product.category === category);
          setProducts(filteredProducts);
        } else {
          console.error("No products found");
        }
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchProducts();
  }, [category]);
  

  return (
    <div>
      {products.map(product => (
        <div className='main-div' key={product._id}>
          <div className='main-div2'>
            <div className='picture'>
            <Link to={`/product/${product._id}`} >
              <img src={`http://localhost:4000${product.imageUrl}`} alt="Product Image" />
              </Link>
            </div>
            <div className='DandN'>
            <Link to={`/product/${product._id}`} className='listname'>
              <h1>{product.productName}</h1><br />
              </Link>
              <p className='description'>{product.description}</p>
            </div>
            <div>
              <p className='Listprice'>₹{product.price}</p>
              <div>
                <h1 className='List-bankoffer'>Bank offer</h1>
                <p className='List-EMI'>No cost EMI available</p>
              </div>
              <div className='List-Buttondiv'>
              <Link to={`/product/${product._id}`}>
                <button className='List-Buy-now'>Buy Now</button>
                </Link>
                <button className='List-Addtocart'>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
