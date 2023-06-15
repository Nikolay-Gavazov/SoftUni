const { Router } = require('express');

const router = Router();


    router.get('/details/:id', async(req, res) => {
        const id = req.params.id;
        const item = await req.storage.getById(id);
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        const isOwner = user?._id.toString() == item.author[0]._id.toString();
        const isBidder = await req.storage.getBidder(id, user?._id)
        const fullName = `${item.author[0].firstName} ${item.author[0].lastName}`
        const bidderName = `${item.bidder[0]?.firstName} ${item.bidder[0]?.lastName}`
        if(item){
            if(isOwner){
                res.render('details-owner', { _title: 'Auction Details', user,item,fullName,bidderName, id});
            }else{
                res.render('details', { _title: 'Auction Details', user,item,isBidder,fullName, id});
            }
        }else{
            res.redirect('/404');
        }
    });

    router.post('/details/:id/bid', async (req, res) => {
        const id = req.params.id;
        const {amount} = req.body;
        const item = await req.storage.getById(id);
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        try {
            if(amount <= item.price){
                const error = [];
                error.push({msg: 'This is not the best price.Bid more please.'});
                throw error;
            }
            await req.storage.bid(id,user, amount);
            res.redirect(`/details/${id}`)
        } catch (error) {
            console.log(error);
            res.render('details', { _title: 'Details Page', error, item});
        }
    });
    router.get('/details/:id/close', async (req, res) => {
        const id = req.params.id;
        const item = await req.storage.getById(id);
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        try {
            await req.storage.close(id, user);
            res.redirect(`/profile`);
        } catch (error) {
            console.log(error);
            res.render('details', { _title: 'Details Page', error,user, item});
        }
    });

    module.exports = router;