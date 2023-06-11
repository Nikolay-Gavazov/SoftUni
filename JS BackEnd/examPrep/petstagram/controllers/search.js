const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const router = Router();

router.get('/search', async (req, res) => {
    const user = await req.storage.getUser(await req.storage.checkUser(req));
    const games = await req.game.getAll(req.query);
    res.render('search', {title: 'Search Page', user, games})
});

module.exports = router;