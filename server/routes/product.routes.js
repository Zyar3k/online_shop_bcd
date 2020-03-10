const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/product.controller');

router.route('/products').get(ProductController.getAllProducts);

router.route('/product/:id').get(ProductController.getProduct);

module.exports = router;