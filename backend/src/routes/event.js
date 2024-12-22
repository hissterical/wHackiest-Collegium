const express = require('express');
const Event = require('../models/Event');

const router = express.Router();

router.post('/', async(req, res) => {
    const {title, description, location, date} = req.body;

    try {
        const event = new Event({title, description, location, date});
        await event.save();
        res.status(201).json(event);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

router.get('/', async(req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})


module.exports = router;