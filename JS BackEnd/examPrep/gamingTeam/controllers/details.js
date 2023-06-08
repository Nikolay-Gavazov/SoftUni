module.exports = {
    async details(req, res){
        const id = req.params.id;
        const cube = await req.cube.getById(id);
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        const isOwner = user._id == cube.ownerId;
        if(cube){
            res.render('details', {cube, title: `Cubicle - ${cube.name}`, user, isOwner});
        }else{
            res.redirect('/404');
        }
    }
}