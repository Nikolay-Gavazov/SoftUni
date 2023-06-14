module.exports = {
    async deletePage(req, res) {
        const id = req.params.id;

        await req.trip.deleteItem(id);

        res.redirect('/catalog')
    }
}