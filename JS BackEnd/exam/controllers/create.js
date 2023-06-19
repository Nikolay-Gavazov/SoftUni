const { Router } = require('express');
const { body, validationResult } = require('express-validator');
const { autMidd, isAuth } = require('../middlewares/authMidd');

const router = Router();

router.get('/create', autMidd, isAuth, async (req, res) => {
    res.render('create', { _title: 'Create Page', user:req.user });
})
router.post('/create',
    body('name').trim(),
    body('kind').trim(),
    body('image').trim(),
    body('needOf').trim(),
    body('description').trim(),
    body('location').trim(),
    body('name', 'Name should be at least 2 characters')
        .isLength({ min: 2 }),
    body('kind', 'Kind should be at least 3 characters')
        .isLength({ min: 3 }),
    body('image', 'Publication image should start with "http://" or "https://"')
        .isURL(),
    body('years', 'Years are required and should be a number between 1 and 100')
        .isInt({ min:1, max: 100 }),
    body('needOf', 'Need is required and should be at least 3 and no longer than 20 characters')
        .isLength({ min:3, max: 20 }),
    body('description', 'Description is required and should be at least 5 and no longer than 50 characters')
        .isLength({ min:5, max: 50 }),
    body('location', 'Location is required and should be at least 5 and no longer than 15 characters')
        .isLength({ min:5, max: 15 }),
    autMidd, isAuth, async (req, res) => {
        const data = req.body;
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        const { errors } = validationResult(req);
        const animal = {
            name: data.name,
            kind: data.kind,
            image: data.image,
            years: Number(data.years),
            needOf: data.needOf,
            description: data.description,
            location: data.location,
            owner: { _id: user._id }
        };

        try {
            if (errors.length > 0) {
                throw errors;
            }
            await req.storage.createItem(animal);
            
            res.redirect('/catalog');
        } catch (error) {
            res.render('create', { _title: 'Create Page', error, user, animal });
        }
    });

module.exports = router;
