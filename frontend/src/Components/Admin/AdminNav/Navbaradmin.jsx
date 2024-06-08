import React from 'react';
import './Navbaradmin.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faList, faUsers, faTags } from '@fortawesome/free-solid-svg-icons';

function Navbaradmin() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark-custom">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/admin">
                  <h1 className="navbar-brand-custom mx-auto">CellWorld</h1>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/admin/Productadd">
                  <FontAwesomeIcon icon={faPlus} /> Add Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/admin/productlist">
                  <FontAwesomeIcon icon={faList} /> Product List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/admin/userlist">
                  <FontAwesomeIcon icon={faUsers} /> User List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/admin/category">
                  <FontAwesomeIcon icon={faTags} /> Category
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbaradmin;
