// const express = require('express');
// const router = express.Router();
// const Wishlist = require('../Model/wishlistModel');  // Create this model
// const verifyToken = require('../Middleware/authMiddleware');  // Middleware to verify token

// router.post('/add-to-wishlist', verifyToken, async (req, res) => {
//     const { userId, productId } = req.body;
//     try {
//         const wishlistItem = new Wishlist({ userId, productId });
//         await wishlistItem.save();
//         res.json({ message: 'Product added to wishlist', success: true });
//     } catch (error) {
//         console.error('Error adding to wishlist', error);
//         res.status(500).json({ message: 'Internal server error', success: false });
//     }
// });

// module.exports = router;
