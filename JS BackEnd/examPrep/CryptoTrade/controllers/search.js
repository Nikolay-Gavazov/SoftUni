const { Router } = require('express');

const router = Router();

router.get('/search', async (req, res) => {
    const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
    const result = await req.storage.getAll(req.query);

    res.render('search', { _title: 'Profile Page', user, result})
});


module.exports = router;