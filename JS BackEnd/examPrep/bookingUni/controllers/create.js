const { Router } = require('express');
const { body, validationResult } = require('express-validator');
const { autMidd, isAuth } = require('../middlewares/authMidd');

const router = Router();

router.get('/create', autMidd, isAuth, async (req, res) => {
    res.render('create', { _title: 'Create Page', user:req.user });
})
router.post('/create',
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
        const data = req.body;
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        const { errors } = validationResult(req);
        const hotel = {
            name: data.name,
            city: data.city,
            image: data.image,
            freeRooms: Number(data.freeRooms),
            owner: { _id: user._id }
        };

        try {
            if (errors.length > 0) {
                throw errors;
            }
            const result = await req.storage.createItem(hotel);
            if(!result){
                const error = [];
                error.push({ msg: 'This hotel already exist!' });
                throw error;
            }
            req.userStorage.addAd(user._id, result._id);
            res.redirect('/catalog');
        } catch (error) {
            console.log(error);
            res.render('create', { _title: 'Create Page', error, user, hotel });
        }
    });

module.exports = router;
