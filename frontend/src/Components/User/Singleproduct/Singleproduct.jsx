import React from 'react'
import "./Singleproduct.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faShoppingCart, faCreditCard, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Singleproduct() {
  return (
    <div className='wrap0'>
      <div className='wrap1'>
        <div className='wrap2'>
          <h2 className='model'>Phone Model</h2>
          <div className='image'>
            <img className="product-image" src='https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Phone" />
          </div>
          <div className="rating-single">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div>
            <p className='price-single'>Special price :</p>
            <p className="special-price">$299.99 </p><p><span className="original-price">$399.99</span></p>
          </div>
          <Link to="/wishlist" className="wishlist-link">
            <FontAwesomeIcon icon={faHeart} className="wishlist-icon" />
          </Link>
          <button className="add-to-cart">
            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
          </button>
          <Link to="/checkout">
            <button className="buy-now">
              <FontAwesomeIcon icon={faCreditCard} /> Buy Now
            </button>
          </Link>
          <p className="item-description">
            Discover the realme P1 5G, which offers strong performance and flawless connectivity thanks to the contemporary MediaTek Dimensity 7050 5G Chipset and Smart 5G features. Immerse yourself in vivid images on the 120Hz AMOLED display, which is supplemented with features like fingerprint recognition within the display and Sunlight Screen technology for readable content outside. With the 7-layer VC Cooling System, you can operate at the highest level without worrying about overheating when things get hot. With unparalleled performance and dependability, the realme P1 5G has a four-year smooth user experience guaranteed by TUV SUD certification, making it your reliable friend for years to come.
          </p>
          <div className="bank-offers">
            <h1>Available offers</h1>
            <br />
            <ul >
              <li>10% off on XYZ Bank Credit Cards</li>
              <li>5% cashback with ABC Bank Debit Cards</li>
              <li>No Cost EMI available</li>
            </ul>
          </div>
















        </div>
      </div>
    </div>
  )
}

export default Singleproduct
