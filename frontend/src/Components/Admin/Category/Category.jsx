import React, { useState } from 'react';
import './Category.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



const CategoryPage = () => {
  const [categories, setCategories] = useState(['Apple', 'Android']);
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  const handleDisableCategory = (category) => {
    // Implement disable functionality if needed
    alert(`Category "${category}" has been disabled.`);
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
      {categories.map((category) => (
        <div key={category} className="category-section">
          <h2>{category}</h2>
          <button className="disable-button" onClick={() => handleDisableCategory(category)}>
            <i className="fas fa-ban"></i>
          </button>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
