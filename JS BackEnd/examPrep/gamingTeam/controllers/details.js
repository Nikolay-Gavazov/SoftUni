module.exports = {
    async details(req, res){
        const id = req.params.id;
        const game = await req.game.getById(id);
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        const isOwner = user._id == game.ownerId;
        if(game){
            res.render('details', {game, title: `Details - ${game.name}`, user, isOwner});
        }else{
            res.redirect('/404');
        }
    }
}