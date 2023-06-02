module.exports = {
    async details(req, res){
        const user = await req.user.getUser(await req.user.checkUser(req))
        const id = req.params.id;
        const cube = await req.cube.getById(id);
        const isOwner = user._id == cube.ownerId;
        if(cube){
            res.render('details', {cube, title: `Cubicle - ${cube.name}`, user, isOwner});
        }else{
            res.redirect('/404');
        }
    }
}