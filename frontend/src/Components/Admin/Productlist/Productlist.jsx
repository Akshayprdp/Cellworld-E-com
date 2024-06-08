import React from 'react';
import './Productlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faBan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Productlist() {
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
            <tr>
              <td>Product 1</td>
              <td>10</td>
              <td>$100</td>
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
            <tr>
              <td>Product 2</td>
              <td>15</td>
              <td>$150</td>
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
            <tr>
              <td>Product 3</td>
              <td>20</td>
              <td>$200</td>
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
            <tr>
              <td>Product 4</td>
              <td>25</td>
              <td>$250</td>
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
            <tr>
              <td>Product 5</td>
              <td>30</td>
              <td>$300</td>
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
            <tr>
              <td>Product 6</td>
              <td>35</td>
              <td>$350</td>
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
            <tr>
              <td>Product 7</td>
              <td>40</td>
              <td>$400</td>
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
            <tr>
              <td>Product 8</td>
              <td>45</td>
              <td>$450</td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Productlist;
