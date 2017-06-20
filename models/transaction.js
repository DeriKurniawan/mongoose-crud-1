var mongoose = require('mongoose');
var Schema = mongoose.schema;

var TransactionSchema = new Schema({
  memberid: String,
  days: Number,
  out_date: {
    type: Date,
    default: Date.now
  },
  due_date: {
    type: Date,
    default: Date.now
  },
  in_date: {
    type: Date,
    default: Date.now
  },
  fine: Number,
  booklist: [
    {
      type: Schema.Type.ObjectId,
      ref: 'Book'
    }
  ]
});

var Transactions = mongoose.model('Transaction', TransactionSchema);

module.exports = Transactions;
