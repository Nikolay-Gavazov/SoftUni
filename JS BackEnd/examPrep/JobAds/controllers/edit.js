const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const router = Router();

    router.get('/edit/:id', async(req, res) => {
        const id = req.params.id;
        const ad = await req.storage.getById(id);
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        res.render('edit', { _title: 'Edit Page', ad, user});
    }),
    router.post('/edit/:id',
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
    const id = req.params.id;
    const data = req.body;
    const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
    const { errors } = validationResult(req);
    const ad = {
        headline: data.headline,
        location: data.location,
        companyName: data.companyName,
        companyDescription: data.companyDescription,
    };
        try {
            if(errors.length > 0){
                throw errors;
            }
            await req.storage.editItem(id, ad);
            res.redirect(`/details/${id}`);
        } catch (error) {
            console.log(error);
            res.render('edit', {_title: 'Edit Page', error, user, ad});
        }
    });
module.exports = router;