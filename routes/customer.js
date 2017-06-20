'use strict'
const express = require('express');
const router = express.Router();
var customer = require('../controllers/customer');

//get all data of customer
router.get('/', customer.showAll)
//get one data of customer
router.get('/:id', customer.show)
//add data of customer
router.post('/', customer.create)
//update customer data
router.put('/:id', customer.update)
//delte one data of customer
router.delete('/:id', customer.delete)

module.exports = router;
