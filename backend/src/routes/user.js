const express = require('express');
const bcrypt = require('bcryptjs'); 
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
    const { email, password, usn, name } = req.body;

    try {
        // Check if the user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);  // Generate salt
        const hashedPassword = await bcrypt.hash(password, salt);  // Hash the password

        // Create the user with the hashed password
        user = new User({
            email,
            password: hashedPassword,  // Store the hashed password
            usn,
            name
        });

        await user.save();

        // Create a payload for the JWT
        const payload = { userId: user._id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });

        // Send the response with the token
        res.json({ 
            token,
            user: {
                id: user._id,
                name: user.name,
                usn: user.usn
            }
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);  // Compare using bcrypt
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Create a payload for the JWT
        const payload = { userId: user._id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });

        // Send the response with the token
        res.json({ 
            token,
            user: {
                id: user._id,
                name: user.name,
                usn: user.usn
            }
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
