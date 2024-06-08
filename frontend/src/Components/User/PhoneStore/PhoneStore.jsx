import React from 'react';
import './PhoneStore.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { faStar, faShoppingCart, faCreditCard, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const PhoneStore = () => {
  return (
    <div className="carousel__image-container">
      <Container className="phone-store-container">
        <Row>
          <Col sm={12} md={6} lg={3}>
            <Card className="phone-card">
              <Card.Img variant="top" src="https://via.placeholder.com/200x300?text=Phone+1" />
              <div className="wishlist-icon-store">
              <Link to="/wishlist" className="wishlist-link-store">
            <FontAwesomeIcon icon={faHeart} className='Store-Wishlisticon' />
          </Link>
          </div>
              <Card.Body>
                <Card.Title>Phone Model 1</Card.Title>
                <Card.Text>$20000</Card.Text>
                <div className="button-container">
                  <Button variant="primary" className="cart-button-store">Add to Cart</Button>
                  <Button variant="secondary" className="purchase-button-store">Buy Now</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Card className="phone-card">
              <Card.Img variant="top" src="https://via.placeholder.com/200x300?text=Phone+2" />
              <div className="wishlist-icon-store">
              <Link to="/wishlist" className="wishlist-link-store">
            <FontAwesomeIcon icon={faHeart} className='Store-Wishlisticon' />
          </Link>
          </div>
              <Card.Body>
                <Card.Title>Phone Model 2</Card.Title>
                <Card.Text>$20000</Card.Text>
                <div className="button-container">
                  <Button variant="primary" className="cart-button-store">Add to Cart</Button>
                  <Button variant="secondary" className="purchase-button-store">Buy Now</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Card className="phone-card">
              <Card.Img variant="top" src="https://via.placeholder.com/200x300?text=Phone+3" />
              <div className="wishlist-icon-store">
              <Link to="/wishlist" className="wishlist-link-store">
            <FontAwesomeIcon icon={faHeart} className='Store-Wishlisticon' />
          </Link>
          </div>
              <Card.Body>
                <Card.Title>Phone Model 3</Card.Title>
                <Card.Text>$20000</Card.Text>
                <div className="button-container">
                  <Button variant="primary" className="cart-button-store">Add to Cart</Button>
                  <Button variant="secondary" className="purchase-button-store">Buy Now</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Card className="phone-card">
              <Card.Img variant="top" src="https://via.placeholder.com/200x300?text=Phone+4" />
              <div className="wishlist-icon-store">
              <Link to="/wishlist" className="wishlist-link-store">
            <FontAwesomeIcon icon={faHeart} className='Store-Wishlisticon' />
          </Link>
          </div>
              <Card.Body>
                <Card.Title>Phone Model 4</Card.Title>
                <Card.Text>$20000</Card.Text>
                <div className="button-container">
                  <Button variant="primary" className="cart-button-store">Add to Cart</Button>
                  <Button variant="secondary" className="purchase-button-store">Buy Now</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Card className="phone-card">
              <Card.Img variant="top" src="https://via.placeholder.com/200x300?text=Phone+5" />
              <div className="wishlist-icon-store">
              <Link to="/wishlist" className="wishlist-link-store">
            <FontAwesomeIcon icon={faHeart} className='Store-Wishlisticon' />
          </Link>
          </div>
              <Card.Body>
                <Card.Title>Phone Model 5</Card.Title>
                <Card.Text>$20000</Card.Text>
                <div className="button-container">
                  <Button variant="primary" className="cart-button-store">Add to Cart</Button>
                  <Button variant="secondary" className="purchase-button-store">Buy Now</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Card className="phone-card">
              <Card.Img variant="top" src="https://via.placeholder.com/200x300?text=Phone+6" />
              <div className="wishlist-icon-store">
              <Link to="/wishlist" className="wishlist-link-store">
            <FontAwesomeIcon icon={faHeart} className='Store-Wishlisticon' />
          </Link>
          </div>
              <Card.Body>
                <Card.Title>Phone Model 6</Card.Title>
                <Card.Text>$20000</Card.Text>
                <div className="button-container">
                  <Button variant="primary" className="cart-button-store">Add to Cart</Button>
                  <Button variant="secondary" className="purchase-button-store">Buy Now</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Card className="phone-card">
              <Card.Img variant="top" src="https://via.placeholder.com/200x300?text=Phone+7" />
              <div className="wishlist-icon-store">
              <Link to="/wishlist" className="wishlist-link-store">
            <FontAwesomeIcon icon={faHeart} className='Store-Wishlisticon' />
          </Link>
          </div>
              <Card.Body>
                <Card.Title>Phone Model 7</Card.Title>
                <Card.Text>$20000</Card.Text>
                <div className="button-container">
                  <Button variant="primary" className="cart-button-store">Add to Cart</Button>
                  <Button variant="secondary" className="purchase-button-store">Buy Now</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Card className="phone-card">
              <Card.Img variant="top" src="https://via.placeholder.com/200x300?text=Phone+8" />
              <div className="wishlist-icon-store">
              <Link to="/wishlist" className="wishlist-link-store">
            <FontAwesomeIcon icon={faHeart} className='Store-Wishlisticon' />
          </Link>
          </div>
              <Card.Body>
                <Card.Title>Phone Model 8</Card.Title>
                <Card.Text>$20000</Card.Text>
                <div className="button-container">
                  <Button variant="primary" className="cart-button-store">Add to Cart</Button>
                  <Button variant="secondary" className="purchase-button-store">Buy Now</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PhoneStore;
