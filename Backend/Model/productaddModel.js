const mongoose = require('mongoose');


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

productSchema.pre("save", async function (next) {
  if (this.isNew) {
    const productcounter = await Counter.findOneAndUpdate(
      { counterName: "proId" },
      { $inc: { counterValue: 1 } },
      { new: true, upsert: true }
    );
    this.proId = productcounter.counterValue;
  }
  next();
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
