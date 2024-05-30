const express = require('express');
const router = express.Router();
const user = require("../controllers/userController/create.controller")
const getUser = require("../controllers/userController/index.Controller")

router.post('/',user)
router.get('/',getUser)


module.exports = router;