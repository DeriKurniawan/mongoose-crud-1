'use strict'
const express = require('express');
const router = express.Router();
var transaction = require('../controllers/transaction');

//get all data of transaction
router.get('/', transaction.showAll)
//get one data of transaction
router.get('/:id', transaction.show)
//add data of transaction
router.post('/', transaction.create)
//update transaction data
router.put('/:id', transaction.update)
//delte one data of transaction
router.delete('/:id', transaction.delete)

module.exports = router;
