const express = require('express');
const router = express.Router();
const inquiry = require("../controllers/supportRequestController/create.controller")
const getInquiry = require("../controllers/supportRequestController/index.controller")


router.post('/',inquiry)
router.get('/',getInquiry)


module.exports = router;

