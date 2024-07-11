const express = require('express');
const { authenticateUser } = require('../middleware/auth.middleware');
const { bookAnErrand } = require('../controllers/book.controller');

const router = express.Router();

router.post('/', authenticateUser, bookAnErrand)

module.exports = router