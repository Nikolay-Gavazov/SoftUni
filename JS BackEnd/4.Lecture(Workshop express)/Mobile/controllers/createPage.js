module.exports = {
    get(req, res){
        res.render('create', {title: 'Publish your car'});      
    },
    post(req, res){
        console.log(req.params);
    }
}