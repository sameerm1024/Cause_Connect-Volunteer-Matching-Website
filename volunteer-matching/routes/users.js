const express = require('express');
const router = express.Router();
const User = require('../models/User');

// User registration route
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, skills } = req.body;

        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user
        user = new User({
            name,
            email,
            password, // Store password as plain text
            skills: skills.split(',').map(skill => skill.trim())
        });

        // Save user to database
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'User registration failed', error: error.message });
    }
});

// User login route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Check if password matches
        if (user.password !== password) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Successful login
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Login failed', error: error.message });
    }
});

module.exports = router;
