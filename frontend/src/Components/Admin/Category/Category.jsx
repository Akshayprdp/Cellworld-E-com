import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addcategory, categoryitems } from '../../../Services/AdminApi';
import { FaTrash } from 'react-icons/fa'; // Import Font Awesome Trash Icon

function Category() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await categoryitems();
        if (response.data.success) {
          setCategories(response.data.categories); // Adjust according to your API response structure
        } else {
          console.error('Failed to fetch categories');
        }
      } catch (error) {
        console.error('An error occurred while fetching categories', error);
      }
    };

    fetchCategories();
  }, []);

  const handleAddCategory = async () => {
    if (newCategory) {
      try {
        const response = await addcategory({ name: newCategory });
        if (response.data.success) {
          setCategories([...categories, response.data.category]); // Adjust according to your API response structure
          toast.success('Category added successfully!');
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error('An error occurred while adding the category');
        console.error(error);
      }
      setNewCategory('');
    } else {
      toast.error('Category name cannot be empty');
    }
  };

  // const handleDeleteCategory = async (id) => {
  //   try {
  //     const response = await deleteCategory(id);
  //     if (response.data.success) {
  //       setCategories(categories.filter((category) => category._id !== id)); // Adjust according to your API response structure
  //       toast.success('Category deleted successfully!');
  //     } else {
  //       toast.error(response.data.message);
  //     }
  //   } catch (error) {
  //     toast.error('An error occurred while deleting the category');
  //     console.error(error);
  //   }
  // };

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
      
      <div className="category-table">
        <table className="table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category._id}>
                <td>{category.name}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    // onClick={() => handleDeleteCategory(category._id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Category;
