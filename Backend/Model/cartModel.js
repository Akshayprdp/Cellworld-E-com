const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  proIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  }],
  quantity: {
    type: Number,
    default: 1,
  },
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem;
