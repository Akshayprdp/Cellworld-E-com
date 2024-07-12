import React, { useEffect, useState } from 'react';
import './Wishlist.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { userInstance } from '../../../Axios/Axiosinstance';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWishlistItems = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        console.error("User not logged in");
        return;
      }

      try {
        const response = await userInstance.get(`/api/wishlist/${userId}`);
        if (response.data.status) {
          setWishlistItems(response.data.wishlistItems);
        } else {
          console.error("No items in the wishlist");
        }
      } catch (error) {
        console.error("Error fetching wishlist items", error);
      }
    };

    fetchWishlistItems();
  }, []);

  const handleRemoveItem = async (productId) => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      console.error("User not logged in");
      return;
    }

    try {
      const response = await userInstance.post('/api/wishlist/remove', { userId, productId });
      if (response.data.status) {
        setWishlistItems(wishlistItems.filter(item => item._id !== productId));
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error removing item from wishlist", error);
    }
  };

  return (
    <div className="wishlist-wrapper">
      <Container className="wishlist-container">
        {wishlistItems.length === 0 ? (
          <div className="empty-wishlist">
            <p>Your wishlist is empty.</p>
          </div>
        ) : (
          <Row>
            {wishlistItems.map(item => (
              <Col key={item._id} sm={12} md={6} lg={3}>
                <Card className="wishlist-card">
                  <Card.Body>
                    <Link to={`/product/${item._id}`} className='wishlist-link'>
                      <Card.Title>{item.productName}</Card.Title>
                    </Link>
                    <Link to={`/product/${item._id}`} >
                      <Card.Img variant="top" src={`http://localhost:4000${item.imageUrl}`} alt={item.productName} className='pnwish'/>
                    </Link>
                    <div className='price'>
                      <Card.Text>₹{item.price}</Card.Text>
                    </div>
                    <Button variant="danger" className="remove-button" onClick={() => handleRemoveItem(item._id)}>
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Wishlist;
