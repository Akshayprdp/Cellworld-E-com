const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    Emailaddress: {
        type: String,
        required: true
    },
    Phonenumber: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("admin", adminSchema);


const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

