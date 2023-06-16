const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const router = Router();

    router.get('/edit/:id', async(req, res) => {
        const id = req.params.id;
        const home = await req.storage.getById(id);
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        res.render('edit', { _title: 'Edit Page', home, user});
    }),
    router.post('/edit/:id',
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
    const id = req.params.id;
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
    };
        try {
            if(errors.length > 0){
                throw errors;
            }
            await req.storage.editItem(id, home);
            res.redirect(`/details/${id}`);
        } catch (error) {
            console.log(error);
            res.render('edit', {_title: 'Edit Page', error, user, home});
        }
    });
module.exports = router;