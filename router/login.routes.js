const express = require('express');
const router = express.Router();
const login = require("../controllers/loginController/create.controller")

router.post('/',login);