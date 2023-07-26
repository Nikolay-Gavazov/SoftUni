const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { studioController, commentController } = require('../controllers');

// middleware that is specific to this router

router.get('/', themeController.getThemes);
router.post('/', /* auth(), */ themeController.createTheme);

router.get('/:themeId', themeController.getTheme);
router.post('/:themeId', /* auth(), */ postController.createPost);
router.put('/:themeId', auth(), themeController.subscribe);
router.put('/:themeId/posts/:postId', auth(), commentController.editPost);
router.delete('/:themeId/posts/:postId', auth(), commentController.deletePost);


module.exports = router