module.exports = {
    async details(req, res){
        const id = req.params.id;
        const photo = await req.photo.getById(id);
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        const isOwner = user._id == photo._ownerId;
        // let isBougth = game.bougthBy?.filter(el => el.username == user.username);
        if(photo){
            res.render('details', { user, photo});
        }else{
            res.redirect('/404');
        }
    }
}