const { Router } = require('express');

const router = Router();


    router.get('/details/:id', async(req, res) => {
        const id = req.params.id;
        const book = await req.storage.getById(id);
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        const isOwner = user?._id.toString() == book.owner.user._id.toString();
        const isWished = await req.userStorage.getWishes(user?._id, id)
        if(book){
            res.render('details', { _title: 'Details Page', user,book, isOwner,isWished, id});
        }else{
            res.redirect('/404');
        }
    });

    router.get('/details/:id/wish', async (req, res) => {
        const id = req.params.id;
        const book = await req.storage.getById(id);
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        try {
            await req.userStorage.wish(user._id, id);
            res.redirect(`/details/${id}`)
        } catch (error) {
            console.log(error);
            res.render('details', { _title: 'Details Page', error: error.message, book});
        }
    });

    module.exports = router;