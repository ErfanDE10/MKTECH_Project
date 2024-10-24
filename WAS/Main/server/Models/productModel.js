const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  specs: { type: String, required: true },
  additionalInfo: { type: String, required: true },
  image_url: { type: String, required: true }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
