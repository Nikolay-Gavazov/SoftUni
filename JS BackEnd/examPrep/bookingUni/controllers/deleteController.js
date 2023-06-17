const { Router } = require('express');
const { autMidd, isAuth } = require('../middlewares/authMidd');

const router = Router();

router.get('/delete/:id', autMidd, isAuth, async (req, res) => {
    const id = req.params.id;
    const hotel = await req.storage.getById(id);
    const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
    const isOwner = user?._id.toString() == hotel.owner._id.toString();
    if (!isOwner) {
        return res.status(403).redirect('/');
    }
    await req.storage.deleteItem(id);

    res.redirect('/catalog')
})


module.exports = router;