const express = require('express');
const router = express.Router();
const controller = require('../controllers/produkController');

router.post('/', controller.createProduk);
router.get('/', controller.getAllProduk);
router.get('/:id', controller.getProdukById);
router.put('/:id', controller.updateProduk);
router.delete('/:id', controller.deleteProduk);

module.exports = router;
