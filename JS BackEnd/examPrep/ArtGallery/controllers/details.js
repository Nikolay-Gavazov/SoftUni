const { Router } = require('express');

const router = Router();


    router.get('/details/:id', async(req, res) => {
        const id = req.params.id;
        const home = await req.storage.getById(id);
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        const isOwner = user?._id.toString() == home.owner._id.toString();
        const isApplied = await req.storage.getApply(id, user?._id);
        const tenants = home.rented.map(el => el.fullName);
        console.log(tenants);
        if(home){  
         res.render('details', { _title: 'Details Page', user,home,isOwner, isApplied, tenants: tenants.join(', ')});   
        }else{
            res.redirect('/404');
        }
    });

    router.get('/details/:id/rent', async (req, res) => {
        const id = req.params.id;
        const home = await req.storage.getById(id);
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        try {
            await req.storage.rent(id,user._id);
            res.redirect(`/details/${id}`)
        } catch (error) {
            console.log(error);
            res.render('details', { _title: 'Details Page', error, home});
        }
    });

    module.exports = router;