'use strict'
const Transaction = require('../models/transaction');
const count = require('../helpers/date_count');
var methods = {}

methods.showAll = function(req, res){
  Transaction.find({})
  .populate('booklist')
  .exec((err, result)=>{
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
  Transaction.findById(req.params.id)
  .populate('booklist')
  .exec((err, result)=>{
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
  var body = req.body;
  //console.log('ini body di transaction.create: ', body)
  var dueDate = body.due_date,
      outDate = body.out_date,
      inDate = body.in_date;
  var bookSumary = body.booklist.length;
  console.log('ini req.body', req.body);
  Transaction.create({
    memberid: body.memberid,
    days: count.getDateSum(outDate, inDate),
    out_date: outDate,
    due_date: dueDate,
    in_date: inDate,
    fine: count.getFine(outDate, dueDate, inDate, bookSumary),
    booklist: req.body.booklist
  }, (err, result)=>{
    console.log('ini adalah result di transaction.create ', result);
    if(err){
      res.status(500).send({
        msg: 'something wrong in database',
        error: err
      })
    } else {
      res.send({
        msg: 'success to add new Transaction',
        data: result
      });
    }
  })
}

methods.update = function(req, res){
  Transaction.findById(req.params.id, (err, data)=>{
    if(err){
      res.status(500).send({
        msg: 'something wrong in database',
        error: err
      })
    } else {
      //console.log('ini adalah isi dari data di customer.update : ', data)
      let body = req.body;
      data.memberid = body.memberid || data.memberid
      data.days= count.getDateSum(body.out_date, body.in_date) || data.days
      data.out_date = body.out_date || data.out_date
      data.due_date = body.due_date || data.due_date
      data.in_date = body.in_date || data.in_date
      data.fine = count.getFine(body.out_date, body.due_date, body.in_date) || data.fine
      data.booklist = body.booklist || data.booklist

      data.save((err, result)=>{
        if(err){
          res.status(500).send({
            msg: 'something wrong in database',
            error: err
          })
        } else {
          res.send({
            msg: 'success to update data of customer',
            data: result
          })
        }
      })
    }
  })
}

methods.delete = function(req, res){
  Transaction.findByIdAndRemove(req.params.id)
  .exec((err, result)=>{
    if(err){
      res.status(500).send({
        msg: 'something wrong in database',
        error: err
      })
    } else {
      res.send({
        msg: 'success to delete data of customer',
        data: result
      })
    }
  })
}

module.exports = methods;
