module.exports = {
    async deletePage(req, res) {
        const id = req.params.id;

        await req.post.deleteItem(id);

        res.redirect('/catalog')
    }
}