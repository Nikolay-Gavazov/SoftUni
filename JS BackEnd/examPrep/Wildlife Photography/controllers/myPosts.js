const { Router } = require('express');

const router = Router();

router.get('/userposts', async (req, res) => {
    const user = await req.storage.getUser(await req.storage.checkUser(req));
    const myPosts = user.myPosts;
    myPosts.author = `${user.firstName} ${user.lastName}`;

    res.render('my-posts', { _title: 'My Posts', user, myPosts})
});

module.exports = router;