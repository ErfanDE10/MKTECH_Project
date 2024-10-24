// product Routes
const express = require('express');
const { getAllProducts, getProductDetails, getAdditionalInfo, getProductSpecs } = require('../Controllers/productController');
const router = express.Router();

router.get('/', getAllProducts);             
router.get('/:id', getProductDetails);       
router.get('/:id/additional', getAdditionalInfo);  
router.get('/:id/specs', getProductSpecs);   

module.exports = router;
