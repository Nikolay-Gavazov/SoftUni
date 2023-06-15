const { Router } = require('express');

const router = Router();


    router.get('/details/:id', async(req, res) => {
        const id = req.params.id;
        const coin = await req.storage.getById(id);
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        const isOwner = user?._id.toString() == coin.owner.user._id.toString();
        const isBought = await req.storage.getBuyers(id, user?._id)
        if(coin){
            res.render('details', { _title: 'Details Page', user,coin, isOwner,isBought, id});
        }else{
            res.redirect('/404');
        }
    });

    router.get('/details/:id/buy', async (req, res) => {
        const id = req.params.id;
        const coin = await req.storage.getById(id);
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        try {
            await req.storage.buy(id, user._id);
            res.redirect(`/details/${id}`)
        } catch (error) {
            console.log(error);
            res.render('details', { _title: 'Details Page', error: error.message, coin});
        }
    });

    module.exports = router;