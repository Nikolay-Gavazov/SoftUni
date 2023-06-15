const { Router } = require('express');

const router = Router();


    router.get('/details/:id', async(req, res) => {
        const id = req.params.id;
        const ad = await req.storage.getById(id);
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        const isOwner = user?._id.toString() == ad.author._id.toString();
        const isApplied = await req.storage.getApply(id, user?._id)
        if(ad){  
         res.render('details', { _title: 'Details Page', user,ad,isOwner, isApplied});   
        }else{
            res.redirect('/404');
        }
    });

    router.get('/details/:id/apply', async (req, res) => {
        const id = req.params.id;
        const ad = await req.storage.getById(id);
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        try {
            await req.storage.apply(id,user._id);
            res.redirect(`/details/${id}`)
        } catch (error) {
            console.log(error);
            res.render('details', { _title: 'Details Page', error, ad});
        }
    });

    module.exports = router;