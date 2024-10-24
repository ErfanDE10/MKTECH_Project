// Product Controller
const Product = require('../Models/productModel');

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

// Product Details
const getProductDetails = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
};

// Additional Info
const getAdditionalInfo = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json({ additionalInfo: product.additionalInfo });
};

// Product Specs
const getProductSpecs = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json({ specs: product.specs });
};

module.exports = { getAllProducts,
                   getProductDetails,
                   getAdditionalInfo,
                   getProductSpecs };
