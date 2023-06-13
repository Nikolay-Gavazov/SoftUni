const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const router = Router();


    router.get('/details/:id', async(req, res) => {
        const id = req.params.id;
        const photo = await req.photo.getById(id);
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        const isOwner = user?._id.toString() == photo.ownerId._id.toString();
        const isNotOwner = user?._id.toString() != photo.ownerId._id.toString() && user;
        if(photo){
            res.render('details', {user,photo, isOwner, isNotOwner, id});
        }else{
            res.redirect('/404');
        }
    });

    router.post('/details/:id/comment',
    body('comment').trim(),
    body('comment', 'Comment should be at least 1 and no longer than 100 characters.')
        .isLength({min: 1, max: 100}),
     async (req, res) => {
        const id = req.params.id;
        const photo = await req.photo.getById(id);
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        const isOwner = user._id.toString() == photo.ownerId._id.toString();
        const isNotOwner = user._id.toString() != photo.ownerId._id.toString();
        const { errors } = validationResult(req);
        const comment = {
                userId: user._id,
                username: user.username,
                comment: req.body.comment
            }
        try {
            if(errors.length > 0){
                throw errors;
            }
            await req.photo.comment(id, comment);
            res.redirect(`/details/${id}`)
        } catch (error) {
            res.render('details', { error: error.message, photo, isOwner, isNotOwner});
        }
    });

    module.exports = router;