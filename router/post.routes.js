const express = require('express');
const router = express.Router();
const post = require('../controllers/postController/create.controller')
const getPost = require('../controllers/postController/index.controller')
const updatePost = require('../controllers/postController/update.controller')

router.post('/',post)
router.get('/',getPost)
router.put('/:id',updatePost)

module.exports = router;

