import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addcategory } from '../../../Services/AdminApi';

function Category({ categories, setCategories }) {
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = async () => {
    if (newCategory && Array.isArray(categories) && !categories.includes(newCategory)) {
      try {
        const response = await addcategory({ name: newCategory });
        if (response.data.success) {
          setCategories([...categories, newCategory]);
          toast.success('Category added successfully!');
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error('An error occurred while adding the category.');
        console.error(error);
      }
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
