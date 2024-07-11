const express = require('express');

const authRoute = require('./auth.route')
const bookRoute = require('./book.route')

const router = express.Router();

router.use('/auth', authRoute);
router.use('/book-errand', bookRoute);

module.exports = router;