const { Router } = require('express');
const { body, validationResult } = require('express-validator');
const { autMidd, isAuth } = require('../middlewares/authMidd');

const router = Router();

router.get('/edit/:id', autMidd, isAuth, async (req, res) => {
    const id = req.params.id;
    const hotel = await req.storage.getById(id);
    const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
    const isOwner = user?._id.toString() == hotel.owner._id.toString();
    if (!isOwner) {
        res.status(403).redirect('/');
    }
    res.render('edit', { _title: 'Edit Page', hotel, user, id });
}),
    router.post('/edit/:id',
    body('name').trim(),
    body('city').trim(),
    body('image').trim(),
    body('name', 'Name should be at least 4 characters')
        .isLength({ min: 4 }),
    body('city', 'City should be at least 3 characters')
        .isLength({ min: 3 }),
    body('image', 'Publication image should start with "http://" or "https://"')
        .isURL(),
    body('freeRooms', 'The number of free rooms should be between 1 and 100')
        .isInt({min: 1, max: 100}),
    autMidd, isAuth, async (req, res) => {
        const id = req.params.id;
        const data = req.body;
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        const { errors } = validationResult(req);
        const hotel = {
            name: data.name,
            city: data.city,
            image: data.image,
            freeRooms: Number(data.freeRooms),
        };
            try {
                if (errors.length > 0) {
                    throw errors;
                }
                await req.storage.editItem(id, hotel);
                res.redirect(`/details/${id}`);
            } catch (error) {
                console.log(error);
                res.render('edit', { _title: 'Edit Page', error, user, hotel, id });
            }
        });
module.exports = router;