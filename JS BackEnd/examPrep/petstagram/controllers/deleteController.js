module.exports = {
    async deletePage(req, res) {
        const id = req.params.id;

        await req.game.deleteItem(id);

        res.redirect('/catalog')
    }
}