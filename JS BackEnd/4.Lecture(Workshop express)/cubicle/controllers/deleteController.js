module.exports = {
    async deletePage(req, res) {
        const id = req.params.id;

        await req.cube.deleteItem(id);

        res.redirect('/')
    }
}