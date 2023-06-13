module.exports = {
    async catalog(req, res){
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        const posts = await req.post.getAll(req.query);
        res.render('all-posts', { _title: 'All Posts', user, posts});
    }
}