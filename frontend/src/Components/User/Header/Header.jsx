import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faList, faHeart, faUserPlus } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <h1 className="navbar-brand mx-auto">CellWorld</h1>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/category">
                  <FontAwesomeIcon icon={faList} />
                  Category
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/wishlist">
                  <FontAwesomeIcon icon={faHeart} />
                  Wishlist
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/cart">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  Cart
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <FontAwesomeIcon icon={faUser} />
                  Profile
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li>
                    <Link className="dropdown-item" to="/profile">
                      <FontAwesomeIcon icon={faUser} /> Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/login">
                      <FontAwesomeIcon icon={faUser} /> Login
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/signup">
                      <FontAwesomeIcon icon={faUserPlus} /> Signup
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
