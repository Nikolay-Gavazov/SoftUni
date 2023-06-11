module.exports = {
    async buy(req, res) {
        const id = req.params.id;
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        await req.game.buyGame(id, user._id);

        res.redirect(`/details/${id}`);
    }
}