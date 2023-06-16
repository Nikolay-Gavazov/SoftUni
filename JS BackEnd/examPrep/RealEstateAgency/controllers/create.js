const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const router = Router();

    router.get('/create', async (req, res) => {
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        if(!user){
            return res.status(401).redirect('/login');
        }
        res.render('create', { _title: 'Create Page', user });
    })
    router.post('/create',
        body('name').trim(),
        body('type').trim(),
        body('city').trim(),
        body('image').trim(),
        body('description').trim(),
        body('name', 'Headline should be at least 6 characters')
        .isLength({min: 6}),
        body('year', 'Year should be between 1850 and 2021')
        .isInt({min: 1850, max: 2021}),
        body('city', 'City should be at least 4 characters')
        .isLength({min: 4}),
        body('image', 'Home image should start with "http://" or "https://"')
        .isURL(),
        body('description', 'Property Description should be a maximum of 60 characters long')
        .isLength({max: 60}),
        body('availablePieces', 'Available Pieces should be between 0 and 10')
        .isInt({min: 0, max: 10}),
        async(req, res) => {
        const data = req.body;
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        const { errors } = validationResult(req);
        const home = {
            name: data.name,
            type: data.type,
            year: Number(data.year),
            city: data.city,
            image: data.image,
            description: data.description,
            availablePieces: Number(data.availablePieces),
            owner:{_id: user._id}
        };

        try {
            if(errors.length > 0){
                throw errors;
            }
            const result = await req.storage.createItem(home);
            //await req.userStorage.addAd(user._id, result._id);
            res.redirect('/catalog');
        } catch (error) {
            console.log(error);
            res.render('create', {_title: 'Create Page', error, user, home});
        }
    });

module.exports = router;
