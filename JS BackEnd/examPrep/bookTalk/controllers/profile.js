const { Router } = require('express');

const router = Router();

router.get('/profile', async (req, res) => {
    const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
    const myWish = user.wishingList;

    res.render('profile', { _title: 'Profile Page', user, myWish})
});

module.exports = router;