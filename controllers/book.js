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

methods.create = function(req, res){
  //console.log('ini req.body di book.create : ', req.body);
  req.body.stock = Number(req.body.stock);
  let body = req.body;
  Book.create(body, (err, result)=>{
    if(err){
      res.status(500).send({
        msg: 'something wrong in databse',
        error: err
      })
    } else {
      res.send({
        data: result,
        msg: 'add book is success!'
      })
    }
  })
}

methods.update = function(req, res){
    Book.findById(req.params.id, (err, data)=>{
      if(err){
        res.status(500).send({
          msg: 'something wrong in databse',
          error: err
        })
      } else {
        //console.log('ini req.body di book.update : ', req.body);
        //console.log('ini data di book.update : ', data);
        let body = req.body;
        data.isbn = body.isbn || data.isbn
        data.title = body.title || data.title
        data.author = body.author || data.author
        data.category = body.category || data.category
        data.stock = Number(body.stock) || data.stock

        data.save((err, result)=>{
          if(err){
            res.status(500).send({
              msg: 'something wrong in databse',
              error: err
            })
          } else {
            res.send({
              data: result,
              msg: 'updating book data is success!'
            })
          }
        })
      }
    })
}

methods.delete = function(req, res){
  Book.findByIdAndRemove(req.params.id, (err, result)=>{
    if(err){
      res.status(500).send({
        msg: 'something wrong about database',
        error: err
      })
    } else {
      res.send({
        msg: 'delete book is success!!',
        data: result
      })
    }
  })
}

module.exports = methods;
