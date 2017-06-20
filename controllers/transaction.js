'use strict'
const Transaction = require('../models/transaction');
var methods = {}

methods.showAll = function(req, res){
  Transaction.find({}, (err, result)=>{
    if(err){
      res.status(500).send({
        msg: 'something wrong in database',
        error: err
      })
    } else {
      res.send(result);
    }
  })
}

methods.show = function(req, res){
  Transaction.findById(req.params.id, (err, result)=>{
      if(err){
        res.status(500).send({
          msg: 'something wrong in database',
          error: err
        })
      } else {
        res.send(result)
      }
    })
  }
}


module.exports = methods;
