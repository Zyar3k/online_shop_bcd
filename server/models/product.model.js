const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
  id: { type: 'String', required: true },
  name: { type: 'String', required: true },
  description: { type: 'String', required: true },
  img: { type: 'String', required: true },
  tag: { type: 'String', required: true },
  price: { type: 'Number', required: true },
  quantity: { type: 'Number', required: true },
});

module.exports = mongoose.model('Product', Product);