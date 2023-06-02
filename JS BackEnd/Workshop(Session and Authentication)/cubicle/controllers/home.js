module.exports = {
    async home(req, res){
        const user = await req.user.checkUser(req);
        const cubes = await req.cube.getAll(req.query);
        res.render('index', {cubes, title: 'Cubicle', user, query: req.query});
    }
}