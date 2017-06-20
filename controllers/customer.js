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

methods.create = function(req, res){
  //console.log('ini isi dari req.bady di customer.create : ', req.body)
  let body = req.body
  Customer.create(body, (err, result)=>{
    if(err){
      res.status(500).send({
        msg: 'something wrong in database',
        error: err
      })
    } else {
      res.send({
        msg: 'success to add new customer',
        data: result
      })
    }
  })
}

module.exports = methods
