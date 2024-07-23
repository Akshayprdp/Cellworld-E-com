import React, { useState } from 'react';
import Category from '../Category/Category';
import Productadd from '../Productadd/Productadd';

const App = () => {
  const [categories, setCategories] = useState(['Apple', 'Android']);

  const handleAddCategory = (newCategory) => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
    }
  };

  return (
    <div>
      <Category categories={categories} onAddCategory={handleAddCategory} />
      <Productadd categories={categories} />
    </div>
  );
};

export default App;
