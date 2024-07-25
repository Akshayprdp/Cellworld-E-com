import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

function CategoryManager({ categories, setCategories }) {
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  return (
    <div className="category-manager">
      <div className="form-group">
        <label htmlFor="newCategory" className="form-label">Add New Category</label>
        <input
          type="text"
          id="newCategory"
          name="newCategory"
          className="form-control"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button type="button" className="form-btn" onClick={handleAddCategory}>
          Add Category
        </button>
      </div>
    </div>
  );
}

CategoryManager.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired, // Ensure categories is an array of strings
  setCategories: PropTypes.func.isRequired // Ensure setCategories is a function
};

export default CategoryManager;
