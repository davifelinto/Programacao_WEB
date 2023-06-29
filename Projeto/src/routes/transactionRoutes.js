const express = require('express');
const router = express.Router();

const transactionController = require('../controllers/transactionController');
const authController = require('../controllers/authController');

router.get('/pessoa/cadastrar', transactionController.createView);
router.post('/pessoa/cadastrar', transactionController.createTransaction);

router.get('/pessoa/listar', authController.verifiyAuthentication, transactionController.readView);

router.get('/pessoa/editar/:id', authController.verifiyAuthentication, transactionController.updateView);
router.post('/pessoa/editar', authController.verifiyAuthentication, transactionController.updateTransaction);

router.post('/pessoa/excluir', authController.verifiyAuthentication, transactionController.deleteTransaction);

module.exports = router;
