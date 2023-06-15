const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const router = Router();

    router.get('/edit/:id', async(req, res) => {
        const options = {
            'estate': 'estate',
            'vehicles': 'vehicles',
            'furniture': 'furniture',
            'electronics': 'electronics',
            'other': 'other'
        }
        const id = req.params.id;
        const item = await req.storage.getById(id);
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        const hasBidder = item.bidder.length > 0;
        const category = Object.keys(options).map(value => ({
            value,
            label: options[value],
            isSelected: item.category == value

        }));
        res.render('edit', { _title: 'Edit Page', id, item,category,hasBidder, user});
    }),
    router.post('/edit/:id',
    body('title').trim(),
    body('description').trim(),
    body('image').trim(),
    body('title', 'Title should be at least 4 characters')
    .isLength({min: 4}),
    body('description', 'Author should be a maximum of 200 characters long')
    .isLength({max: 200}),
    body('image', 'Image should start with "http://" or "https://"')
    .isURL(),
    body('price', 'Price should be positive number')
    .isInt({min: 0}),
    body('category')
    .custom(value => value == 'estate' || 
    value == 'vehicles' || 
    value == 'furniture' ||
    value == 'electronics' ||
    value == 'other'),
    async(req, res) => {
    const id = req.params.id;
    const data = req.body;
    const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
    const { errors } = validationResult(req);
    const item = {
        title: data.title,
        description: data.description,
        category: data.category,
        image: data.image,
        price: Number(data.price),
    };
    console.log(item);
        try {
            if(errors.length > 0){
                throw errors;
            }
            await req.storage.editItem(id, item);
            res.redirect(`/details/${id}`);
        } catch (error) {
            //console.log(error);
            res.render('edit', {_title: 'Edit Page', error, user, item, id});
        }
    });
module.exports = router;