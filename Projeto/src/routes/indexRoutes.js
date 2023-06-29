const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const authController = require('../controllers/authController');

router.get('/', authController.verifiyAuthentication, indexController.indexView);

module.exports = router;
