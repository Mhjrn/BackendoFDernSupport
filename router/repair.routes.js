const express = require('express');
const router = express.Router();
const repair = require('../controllers/repairController/create.controller')
const getRepair = require('../controllers/repairController/index.controller')


router.post('/',repair)
router.get('/',getRepair)

module.exports = router;
