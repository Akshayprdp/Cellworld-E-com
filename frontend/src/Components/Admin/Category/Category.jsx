import React, { useState } from 'react';

function Category({ categories, setCategories }) {
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

export default Category;
