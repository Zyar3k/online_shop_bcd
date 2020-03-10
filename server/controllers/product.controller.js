const Product = require('../models/product.model');

exports.getAllProducts = async (req, res) => {
  
  try {
    res.status(200).json(await Product.find());
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getProduct = async (req, res) => {

	try {
    res.status(200).json(await Product.find({id: req.params.id}));
  } catch(err) {
    res.status(500).json(err);
  }
};