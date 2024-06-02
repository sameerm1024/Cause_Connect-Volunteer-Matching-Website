const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

router.post('/', async (req, res) => {
    const { name, organization, description, time, date, place, skills } = req.body;

    try {
        const newEvent = new Event({
            name,
            organization,
            description,
            time,
            date,
            place,
            skills
        });

        await newEvent.save();
        res.status(201).json({ message: 'Event added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to add event' });
    }
});

// Fetch all events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
