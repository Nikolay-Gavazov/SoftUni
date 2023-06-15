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
        body('headline').trim(),
        body('location').trim(),
        body('companyName').trim(),
        body('companyDescription').trim(),
        body('headline', 'Headline should be at least 4 characters')
        .isLength({min: 4}),
        body('location', 'Location should be at least 8 characters')
        .isLength({min: 8}),
        body('companyName', 'Company Name should be at least 3 characters')
        .isLength({min: 3}),
        body('companyDescription', 'Company Description should be a maximum of 40 characters long')
        .isLength({max: 40}),
        async(req, res) => {
        const data = req.body;
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        const { errors } = validationResult(req);
        const ad = {
            headline: data.headline,
            location: data.location,
            companyName: data.companyName,
            companyDescription: data.companyDescription,
            author:{_id: user._id},
        };

        try {
            if(errors.length > 0){
                throw errors;
            }
            const result = await req.storage.createItem(ad);
            await req.userStorage.addAd(user._id, result._id);
            res.redirect('/catalog');
        } catch (error) {
            console.log(error);
            res.render('create', {_title: 'Create Page', error, user, ad});
        }
    });

module.exports = router;
