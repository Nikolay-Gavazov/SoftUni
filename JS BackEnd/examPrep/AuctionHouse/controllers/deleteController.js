module.exports = {
    async deletePage(req, res) {
        const id = req.params.id;

        await req.storage.deleteItem(id);

        res.redirect('/catalog')
    }
}