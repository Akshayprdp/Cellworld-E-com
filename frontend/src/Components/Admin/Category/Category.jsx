import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import './Category.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Category = ({ categories, onAddCategory }) => {
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory) {
      if (typeof onAddCategory === 'function') {
        onAddCategory(newCategory);
      } else {
        console.error('onAddCategory is not a function');
      }
      setNewCategory('');
    }
  };

  return (
    <div className="category-page">
      <div className="form-container">
        <input
          type="text"
          placeholder="New category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button onClick={handleAddCategory}>Add Category</button>
      </div>
      {categories.length > 0 ? (
        categories.map((category) => (
          <div key={category} className="category-section">
            <h2>{category}</h2>
            <button className="disable-button" onClick={() => alert(`Category "${category}" has been disabled.`)}>
              <i className="fas fa-ban"></i>
            </button>
          </div>
        ))
      ) : (
        <p>No categories available.</p>
      )}
    </div>
  );
};

Category.propTypes = {
  categories: PropTypes.array.isRequired,
  onAddCategory: PropTypes.func.isRequired,
};

export default Category;
