const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.post('',blogController.blog_create_post);
router.delete('/:id',blogController.blog_delete);
router.get('/:id',blogController.blog_deteil);
router.get('',blogController.blog_index)

module.exports = router;