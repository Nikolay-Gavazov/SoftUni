module.exports = {
    async deletePage(req, res) {
        const id = req.params.id;

        await req.photo.deleteItem(id);

        res.redirect('/catalog')
    }
}