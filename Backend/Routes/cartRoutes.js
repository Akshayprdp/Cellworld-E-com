const express = require('express');
const router = express.Router();
const { addToCart, getCartItems, updateCartItem, removeCartItem } = require('../Controllers/cartController');

router.post('/add', addToCart);
router.get('/:userId', getCartItems);
router.put('/update/:userId', updateCartItem); 
router.delete('/remove/:userId/:productId', removeCartItem);

module.exports = router;
