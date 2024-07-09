const express = require('express');
const router = express.Router();
const { getWishlistItems, addWishlistItem, removeWishlistItem } = require('../controllers/wishlistController');

router.get('/:userId', getWishlistItems);
router.post('/add', addWishlistItem);
router.post('/remove', removeWishlistItem);

module.exports = router;
