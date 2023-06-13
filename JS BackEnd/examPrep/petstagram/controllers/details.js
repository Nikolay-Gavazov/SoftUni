const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const router = Router();


    router.get('/details/:id', async(req, res) => {
        const id = req.params.id;
        const photo = await req.photo.getById(id);
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        const isOwner = user._id.toString() == photo.ownerId._id.toString();
        const isNotOwner = user._id.toString() != photo.ownerId._id.toString();
        if(photo){
            res.render('details', { user, photo, isOwner, isNotOwner});
        }else{
            res.redirect('/404');
        }
    });

    router.post('/details/:id/comment', async (req, res) => {

    });

    module.exports = router;