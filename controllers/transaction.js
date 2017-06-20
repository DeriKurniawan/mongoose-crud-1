'use strict'
const Transaction = require('../models/transaction');
const count = require('../helpers/date_count');
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

methods.create = function(req, res){
  var body = req.body;
  var dueDate = body.due_date,
      outDate = body.out_date,
      inDate = body.in_date;
  Transaction.create({
    memberid: body.memberid,
    days: count.getDateSum(outDate, inDate),
    out_date: outDate,
    due_date: dueDate,
    in_date: inDate,
    fine: count.getFine(outDate, dueDate, inDate),
    booklist: req.body.booklist
  }, (err, result)=>{
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

module.exports = methods;
