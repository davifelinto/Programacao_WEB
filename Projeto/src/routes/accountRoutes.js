const express = require('express');
const router = express.Router();

const accountController = require('../controllers/accountController');
const authController = require('../controllers/authController');

router.get('/pessoa/cadastrar', accountController.createView);
router.post('/pessoa/cadastrar', accountController.createAccount);

router.get('/pessoa/listar', authController.verifiyAuthentication, accountController.readView);

router.get('/pessoa/editar/:id', authController.verifiyAuthentication, accountController.updateView);
router.post('/pessoa/editar', authController.verifiyAuthentication, accountController.updateAccount);

router.post('/pessoa/excluir', authController.verifiyAuthentication, accountController.deleteAccount);

module.exports = router;
