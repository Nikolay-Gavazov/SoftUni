const { Router } = require('express');

const router = Router();


    router.get('/details/:id', async(req, res) => {
        const id = req.params.id;
        const trip = await req.storage.getById(id);
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        const isOwner = user?._id.toString() == trip.creator.user._id.toString();
        const isJoined = await req.storage.getJoinedUser(id, user?._id)
        const noSeats = trip.seats == 0;
        if(trip){
            res.render('details', { _title: 'Details Page', user,trip, isOwner, isJoined, id, noSeats});
        }else{
            res.redirect('/404');
        }
    });

    router.get('/details/:id/join', async (req, res) => {
        const id = req.params.id;
        const trip = await req.storage.getById(id);
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        try {
            await req.storage.join(id, user._id);
            res.redirect(`/details/${id}`)
        } catch (error) {
            console.log(error);
            res.render('details', { _title: 'Details Page', error: error.message, trip});
        }
    });

    module.exports = router;