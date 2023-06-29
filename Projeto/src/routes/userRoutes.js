const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.get('/pessoa/cadastrar', userController.createView);
router.post('/pessoa/cadastrar', userController.createUser);

router.get('/pessoa/listar', authController.verifiyAuthentication, userController.readView);

router.get('/pessoa/editar/:id', authController.verifiyAuthentication, userController.updateView);
router.post('/pessoa/editar', authController.verifiyAuthentication, userController.updateUser);

router.post('/pessoa/excluir', authController.verifiyAuthentication, userController.deleteUser);

module.exports = router;
