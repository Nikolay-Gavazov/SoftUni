const router = require('express').Router();

const userController = require('./controllers/user');
const furnitureController = require('./controllers/furniture');

router.use('/users', userController);
router.use('/data/catalog', furnitureController);

module.exports = router;