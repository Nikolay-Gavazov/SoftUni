const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const router = Router();

    router.get('/edit/:id', async(req, res) => {
        console.log(req);
        const id = req.params.id;
        const trip = await req.storage.getById(id);
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        res.render('edit', { _title: 'Edit Page', id, trip, user});
    }),
    router.post('/edit/:id',
    
    body('startPoint').trim(),
    body('endPoint').trim(),
    body('carImage').trim(),
    body('carBrand').trim(),
    body('description').trim(),
    body('startPoint', 'Start Point should be at least 4 characters')
    .isLength({min: 4}),
    body('endPoint', 'End Point should be at least 4 characters')
    .isLength({min: 4}),
    body('carImage', 'Photo should start with "http://" or "https://"')
    .isURL(),
    body('carBrand', 'Car Brand should be at least 3 characters')
    .isLength({min: 3, max: 15}),
    body('price', 'Price should be positive number (from 1 to 50 inclusive)')
    .isInt({min: 1, max: 50}),
    body('seats', 'Seats should be positive number (from 0 to 4 inclusive)')
    .isInt({min: 0, max: 4}),
    body('description', 'Description should be at least 10 characters.')
    .isLength({min: 10}),
    async(req, res) => {
    const id = req.params.id;
    const data = req.body;
    const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
    const { errors } = validationResult(req);
    const trip = {
        startPoint: data.startPoint,
        endPoint: data.endPoint,
        date: data.date,
        time: data.time,
        carImage: data.carImage,
        carBrand: data.carBrand,
        seats: Number(data.seats),
        price: Number(data.price),
        description: data.description,
    };
        try {
            if(errors.length > 0){
                throw errors;
            }
            await req.storage.editItem(id, trip);
            res.redirect(`/details/${id}`);
        } catch (error) {
            console.log(error);
            res.render('edit', {_title: 'Edit Page', error, user, trip});
        }
    });
module.exports = router;