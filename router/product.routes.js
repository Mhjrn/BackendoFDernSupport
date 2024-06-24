const express = require('express');
const router = express.Router();
const product = require('../controllers/productController/create.controller')
const getProduct = require('../controllers/productController/index.controller')
const updateProduct = require('../controllers/productController/update.controller')
const deleteProduct = require('../controllers/productController/delete.controller')

router.post('/', product)
router.get('/', getProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router;

