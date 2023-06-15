const { Router } = require('express');

const router = Router();

router.get('/search', async (req, res) => {
    const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
    const ads = await req.storage.getAll(req.query);
    let result;
    let isSerched = false; 
    if(req.query.search){
        isSerched = true;
        result = ads.filter(el => el.author.email.toLowerCase() == req.query.search.toLowerCase())
    }
    res.render('search', { _title: 'Search', user, result, isSerched})
});

module.exports = router;