const express = require('express');
const router = express.Router();

const personController = require('../controllers/personController');
const authController = require('../controllers/authController');

router.get('/pessoa/cadastrar', personController.createView);
router.post('/pessoa/cadastrar', personController.createPerson);

router.get('/pessoa/listar', authController.verifiyAuthentication, personController.readView);

router.get('/pessoa/editar/:id', authController.verifiyAuthentication, personController.updateView);
router.post('/pessoa/editar', authController.verifiyAuthentication, personController.updatePerson);

router.post('/pessoa/excluir', authController.verifiyAuthentication, personController.deletePerson);

module.exports = router;
