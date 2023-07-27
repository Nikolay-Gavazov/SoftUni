const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { commentController } = require('../controllers');
const { getStudio, getStudios, createStudio } = require('../controllers/studiosController');
// middleware that is specific to this router

router.get('/', getStudios);
router.post('/', /* auth(), */ createStudio);

router.get('/:themeId', getStudio);
router.post('/:themeId', /* auth(), */ commentController.createComment);
router.put('/:themeId/posts/:postId', auth(), commentController.editComment);
router.delete('/:themeId/posts/:postId', auth(), commentController.deleteComment);


module.exports = router