const { Router } = require('express');

const router = Router();

router.get('/profile', async (req, res) => {
    const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
    const myTrips = user.tripsHistory;

    res.render('profile', { _title: 'Profile Page', user, myTrips})
});

module.exports = router;