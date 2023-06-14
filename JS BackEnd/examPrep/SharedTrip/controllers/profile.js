const { Router } = require('express');

const router = Router();

router.get('/profile', async (req, res) => {
    const user = await req.storage.getUser(await req.storage.checkUser(req));
    const myTrips = user.tripsHistory;

    res.render('profile', { _title: 'Profile Page', user, myTrips})
});

module.exports = router;