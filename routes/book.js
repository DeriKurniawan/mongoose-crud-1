'use strict'
const express = require('express');
const router = express.Router();
var book = require('../controllers/book');

//get all data of book
router.get('/', book.showAll)
//get one data of book
router.get('/:id', book.show)
//add data of book
router.post('/', book.create)
//update book data
router.put('/:id', book.update)
//delte one data of book
router.delete('/:id', book.delete)

module.exports = router;
