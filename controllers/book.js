'use strict'
const Book = require('../models/book');
var methods = {}

methods.show = function(req, res){
  Book.find({}, (err, result)=>{
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

methods.showAll = function(req, res){
  Book.findById(req.params.id, (err, result)=>{
    if(err){
      res.status(500).send({
        msg: 'something wrong in databse',
        error: err
      })
    } else {
      res.send(result)
    }
  })
}

//methods

module.exports = methods;
