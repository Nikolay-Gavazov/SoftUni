module.exports = {
    async notFound(req, res){
        res.render('404', {_title: 'Not Found Page', user:req.user});
    }
}