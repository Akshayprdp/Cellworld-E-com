// controllers/categoryController.js

const Category = require('../Model/CategoryModel');

exports.addCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({ success: false, message: 'Category already exists' });
    }
    const newCategory = new Category({ name });
    await newCategory.save();
    res.status(201).json({ success: true, message: 'Category added successfully' });
  } catch (error) {
    console.error("Error adding category:", error);
    res.status(500).json({ success: false, message: 'Error adding category' });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ success: true, categories });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ success: false, message: 'Error fetching categories' });
  }
};
