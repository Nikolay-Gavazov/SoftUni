module.exports = {
    async home(req, res){
        const cubes = await req.cube.getAll(req.query);
        res.render('index', {cubes, title: 'Cubicle'});
    }
}