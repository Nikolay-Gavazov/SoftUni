const { Router } = require('express');
const { isAuth, autMidd } = require('../middlewares/authMidd');

const router = Router();

router.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    const hotel = await req.storage.getById(id);
    const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
    const isOwner = user?._id.toString() == hotel.owner._id.toString();
    const isBooked = await req.storage.getBook(id, user?._id);
    // const tenants = home.rented.map(el => el.fullName);
    if (hotel) {
        res.render('details', { _title: 'Details Page', user, hotel, isOwner, isBooked });
    } else {
        res.redirect('/404');
    }
});

router.get('/details/:id/book', autMidd, isAuth, async (req, res) => {
    const id = req.params.id;
    const hotel = await req.storage.getById(id);
    const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
    try {
        await req.storage.book(id, user?._id);
        await req.userStorage.book(user?._id, id);
        res.redirect(`/`)
    } catch (error) {
        console.log(error);
        res.render('details', { _title: 'Details Page', error, hotel });
    }
});

module.exports = router;