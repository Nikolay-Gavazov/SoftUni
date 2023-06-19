const { Router } = require('express');

const router = Router();

router.get('/search', async (req, res) => {
    const animals = await req.storage.getAll(req.query)

    res.render('search', { _title: 'Search Page', user: req.user, animals })
});

module.exports = router;