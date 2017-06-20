'use strict'
const Customer = require('../models/customer');
var methods = {}

methods.show = function(req, res){
  Customer.find({}, (err, result)=>{
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

methods.showAll = function(req, res){
  Customer.findById(req.params.id, (err, result)=>{
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

module.exports = methods
