import React, { useEffect, useState } from 'react';
import './PhoneStore.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getproducts } from '../../../Services/UserApi';

const PhoneStore = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getproducts();
        if (response.data.status) {
          setProducts(response.data.products);
        } else {
          console.error("No products found");
        }
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="carousel__image-container">
      <Container className="phone-store-container">
        <Row>
          {products.map(product => {
            return (
              <Col key={product._id} sm={12} md={6} lg={3}>
                <Card className="phone-card">
                  <Card.Img variant="top" src={`http://localhost:4000${product.imageUrl}`} alt={product.productName} />
                  <div className="wishlist-icon-store">
                    <Link to="/wishlist" className="wishlist-link-store">
                      <FontAwesomeIcon icon={faHeart} className="Store-Wishlisticon" />
                    </Link>
                  </div>
                  <Card.Body>
                    <Card.Title>{product.productName}</Card.Title>
                    <Card.Text>₹{product.price}</Card.Text>
                    <div className="button-container">
                      <Button variant="primary" className="cart-button-store">Add to Cart</Button>
                      <Button variant="secondary" className="purchase-button-store">Buy Now</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default PhoneStore;
