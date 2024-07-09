const Wishlist = require('../Model/wishlistModel');
const Product = require('../Model/productaddModel');

const getWishlistItems = async (req, res) => {
  try {
    const userId = req.params.userId;
    const wishlist = await Wishlist.findOne({ userId }).populate('productId');
    if (wishlist) {
      res.status(200).json({ status: true, wishlistItems: wishlist.productId });
    } else {
      res.status(404).json({ status: false, message: 'No items in the wishlist' });
    }
  } catch (error) {
    console.error('Error fetching wishlist items:', error);
    res.status(500).json({ status: false, message: 'Server Error', error: error.message });
  }
};

const addWishlistItem = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const wishlist = await Wishlist.findOneAndUpdate(
      { userId },
      { $addToSet: { productId } },
      { new: true, upsert: true }
    );
    res.status(200).json({ status: true, message: 'Item added to wishlist', wishlist });
  } catch (error) {
    console.error('Error adding wishlist item:', error);
    res.status(500).json({ status: false, message: 'Server Error', error: error.message });
  }
};

const removeWishlistItem = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const wishlist = await Wishlist.findOneAndUpdate(
      { userId },
      { $pull: { productId } },
      { new: true }
    );
    res.status(200).json({ status: true, message: 'Item removed from wishlist', wishlist });
  } catch (error) {
    console.error('Error removing wishlist item:', error);
    res.status(500).json({ status: false, message: 'Server Error', error: error.message });
  }
};

module.exports = {
  getWishlistItems,
  addWishlistItem,
  removeWishlistItem,
};
