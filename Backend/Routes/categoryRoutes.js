// routes/categoryRoutes.js

const express = require('express');
const router = express.Router();
const categoryController = require('../Controllers/categoryController');

// Route to add a new category
router.post('/add', categoryController.addCategory);

// Route to get all categories
router.get('/', categoryController.getCategories);

module.exports = router;
