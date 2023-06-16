const { Router } = require('express');

const router = Router();

router.get('/search', async (req, res) => {
    const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
    const homes = await req.storage.getAll(req.query);
    let result;
    let isSerched = false; 
    if(req.query.type){
        isSerched = true;
        result = homes;
    }
    res.render('search', { _title: 'Search Page', user, result, isSerched})
});

module.exports = router;