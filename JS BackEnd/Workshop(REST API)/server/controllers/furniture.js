const router = require('express').Router();

const furnitureService = require('../Services/furnitureService');
const { auth } = require('../middlewares/authMiddleware');

router.post('/', auth, async (req, res) => {
    try {
        await furnitureService.create({
            ...req.body,
            _ownerId: req.user._id
        });
        res.status(201).end();
    } catch (error) {
        res.status(400).json({
            message: 'Connot create furniture'
        })
    }
});

router.get('/', async (req, res) => {
    try {
        const furnitures = await furnitureService.getAll(req.query);
        console.log(furnitures);
        res.status(200).json(furnitures);
    } catch (error) {
        res.status(400).json({
            message: 'Connot find furniture'
        })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const furniture = await furnitureService.findById(req.params.id);

        res.status(200).json(furniture);
    } catch (error) {
        res.status(400).json({
            message: 'Connot find furniture'
        })
    }
});

router.put('/:id', auth, async (req, res) => {
    try {
        const furniture = await furnitureService.edit(req.params.id, req.body);

        res.status(200).json(furniture);
    } catch (error) {
        res.status(400).json({
            message: 'Connot edit furniture'
        })
    }
});

router.delete('/:id', auth, async (req, res) => {
    try {
        await furnitureService.del(req.params.id);

        res.status(200).end();
    } catch (error) {
        res.status(400).json({
            message: 'Connot delete furniture'
        })
    }
})

module.exports = router;