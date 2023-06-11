module.exports = {
    async details(req, res){
        const id = req.params.id;
        const game = await req.game.getById(id);
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        const isOwner = user._id == game.ownerId;
        let isBougth = game.bougthBy?.filter(el => el.username == user.username);
        if(game){
            res.render('details', {game, title: `Details - ${game.name}`, user, isOwner, isBougth});
        }else{
            res.redirect('/404');
        }
    }
}