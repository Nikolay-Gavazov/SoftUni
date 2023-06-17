const { Router } = require('express');
const { autMidd, isAuth } = require('../middlewares/authMidd');

const router = Router();

router.get('/profile', autMidd, isAuth, async (req, res) => {
    const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
    const myPublications = user.myPublications.map(el => el.title).join(', ');
    const myShares = user.shares.map(el => el.title).join(', ');

    res.render('profile', { _title: 'Search Page', user, myPublications, myShares })
});

module.exports = router;