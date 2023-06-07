module.exports = {
    async details(req, res){
        const id = req.params.id;
        const cube = await req.cube.getById(id);
        console.log(user, cube);
        const isOwner = req.userData._id == cube.ownerId;
        if(cube){
            res.render('details', {cube, title: `Cubicle - ${cube.name}`, user: req.userData, isOwner});
        }else{
            res.redirect('/404');
        }
    }
}