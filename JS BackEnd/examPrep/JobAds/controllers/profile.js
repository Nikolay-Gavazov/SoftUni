const { Router } = require('express');

const router = Router();

router.get('/profile', async (req, res) => {
    const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
    const auctions = user.auctions.filter(el => el.isOpen == false);
    console.log(auctions);
    res.render('closed-auctions', { _title: 'Closed Auctions', user, auctions})
});

module.exports = router;