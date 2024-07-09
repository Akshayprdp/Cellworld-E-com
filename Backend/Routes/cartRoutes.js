const express = require('express');
const router = express.Router();
const { addToCart, getCartItems, updateCartItem, removeCartItem } = require('../Controllers/cartController');

router.post('/add', addToCart);
router.get('/:userId', getCartItems);
router.put('/update/:userId', updateCartItem); // Route for updating quantity
router.delete('/remove/:userId/:productId', removeCartItem); // Route for removing item
// router.post('/update', updateCartItem);
// router.post('/remove', removeCartItem);

module.exports = router;
