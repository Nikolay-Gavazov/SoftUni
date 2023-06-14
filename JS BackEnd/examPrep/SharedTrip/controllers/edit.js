const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const router = Router();

    router.get('/edit/:id', async(req, res) => {
        console.log(req);
        const id = req.params.id;
        const post = await req.post.getById(id);
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        res.render('edit', { _title: 'Edit Page', id, post, user});
    }),
    router.post('/edit/:id', body('title').trim(),
    body('author').trim(),
    body('keyword').trim(),
    body('location').trim(),
    body('date').trim(),
    body('image').trim(),
    body('description').trim(),
    body('title', 'Title should be at least 6 characters')
    .isLength({min: 6}),
    body('keyword', 'Keyword should be at least 6 characters')
    .isLength({min: 6}),
    body('image', 'Photo should start with "http://" or "https://"')
    .isURL(),
    body('date', 'Date should be exactly 10 characters.')
    .isLength({min: 10, max: 10}),
    body('location', 'Location  should be no longer than 15 characters.')
    .isLength({ max: 15}),
    body('description', 'Description should be at least 8 characters.')
    .isLength({min: 8}),
    async(req, res) => {
    const id = req.params.id;
    const data = req.body;
    const user = await req.storage.getUser(await req.storage.checkUser(req));
    const { errors } = validationResult(req);
    const post = {
        title: data.title,
        keyword: data.keyword,
        date: data.date,
        image: data.image,
        location: data.location,
        description: data.description,
    };
        try {
            if(errors.length > 0){
                throw errors;
            }
            await req.post.editItem(id, post);
            res.redirect(`/details/${id}`);
        } catch (error) {
            console.log(error);
            res.render('edit', {_title: 'Edit Page', error, user, post,id});
        }
    });
module.exports = router;