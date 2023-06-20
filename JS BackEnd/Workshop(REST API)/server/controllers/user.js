const router = require('express').Router();
const userService = require('../Services/userService');

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userService.register({ email, password });
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userService.login({ email, password });
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: error.message
        })
    }
})

router.get('/logout', (req, res) => {
    res.status(200).end();
})

module.exports = router;

