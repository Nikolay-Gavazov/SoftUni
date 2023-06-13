const { Router } = require('express');

const router = Router();

router.get('/profile/:id', async (req, res) => {
    const user = await req.storage.getUser(await req.storage.checkUser(req));
    const photos = await req.photo.getOwnPhotos(user._id);
    res.render('profile', {user, photos})
});

module.exports = router;