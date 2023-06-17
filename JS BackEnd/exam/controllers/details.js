const { Router } = require('express');
const { isAuth, autMidd } = require('../middlewares/authMidd');

const router = Router();

router.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    const publication = await req.storage.getById(id);
    const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
    const isOwner = user?._id.toString() == publication.author._id.toString();
    const isShared = await req.storage.getShare(id, user?._id);
    // const tenants = home.rented.map(el => el.fullName);
    if (publication) {
        res.render('details', { _title: 'Details Page', user, publication, isOwner, isShared });
    } else {
        res.redirect('/404');
    }
});

router.get('/details/:id/share', autMidd, isAuth, async (req, res) => {
    const id = req.params.id;
    const publication = await req.storage.getById(id);
    const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
    try {
        await req.storage.share(id, user?._id);
        await req.userStorage.share(user?._id, id);
        res.redirect(`/`)
    } catch (error) {
        console.log(error);
        res.render('details', { _title: 'Details Page', error, publication });
    }
});

module.exports = router;