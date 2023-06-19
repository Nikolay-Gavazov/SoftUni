const { Router } = require('express');
const { isAuth, autMidd } = require('../middlewares/authMidd');

const router = Router();

router.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    const animal = await req.storage.getById(id);
    const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
    const isOwner = user?._id.toString() == animal.owner._id.toString();
    const isDonated = await req.storage.getDonations(id, user?._id);

    if (animal) {
        res.render('details', { _title: 'Details Page', user, animal, isOwner, isDonated });
    } else {
        res.redirect('/404');
    }
});

router.get('/details/:id/donate', autMidd, isAuth, async (req, res) => {
    const id = req.params.id;
    const animal = await req.storage.getById(id);
    const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
    const isDonated = await req.storage.getDonations(id, user?._id);
    if(isDonated){
        const error = [];
        error.push({ msg: 'You already donated!' });
        return res.render('details', { _title: 'Details Page', error, animal, user,isDonated});
    }
    try {
        await req.storage.donate(id, user?._id);
        res.redirect(`/`)
    } catch (error) {
        console.log(error);
        res.render('details', { _title: 'Details Page', error, animal, user, isDonated });
    }
});

module.exports = router;