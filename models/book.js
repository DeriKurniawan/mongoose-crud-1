var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  isbn: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  author: String,
  category: String,
  stock: Number
}, {timestamps: true});

var Books = mongoose.model('Book', BookSchema);

module.exports = Books;
