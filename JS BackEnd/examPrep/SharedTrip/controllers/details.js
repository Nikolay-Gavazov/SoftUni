const { Router } = require('express');

const router = Router();


    router.get('/details/:id', async(req, res) => {
        const id = req.params.id;
        const post = await req.post.getById(id);
        console.log(post.author);
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        const isOwner = user?._id.toString() == post.author.user._id.toString();

        const isVoted = await req.post.getUserVote(id, user._id);
        const isNotVoted = !isVoted;
        if(post){
            res.render('details', { _title: 'Details Page', user,post, isOwner,isVoted, isNotVoted, id});
        }else{
            res.redirect('/404');
        }
    });

    router.get('/details/:id/voteUp', async (req, res) => {
        const id = req.params.id;
        const post = await req.post.getById(id);
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        try {
            await req.post.voteUp(id, user._id);
            res.redirect(`/details/${id}`)
        } catch (error) {
            console.log(error);
            res.render('details', { _title: 'Details Page', error: error.message, post});
        }
    });

    router.get('/details/:id/voteDown', async (req, res) => {
        const id = req.params.id;
        const post = await req.post.getById(id);
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        try {
            await req.post.voteDown(id, user._id);
            res.redirect(`/details/${id}`)
        } catch (error) {
            console.log(error);
            res.render('details', { _title: 'Details Page', error: error.message, post});
        }
    });

    module.exports = router;