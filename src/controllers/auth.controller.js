const Auth = require('../models/auth.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const signup = async (req, res) => {
    const { user, fullName, email, password } = req.body;

    if (!user || !fullName || !email || !password) {
        return res.status(400).json({ message: 'Please provide all fields' });
    }

    try {
        const existingUser = await Auth.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        const saltRound = parseInt(process.env.SALT_ROUND);
        if (isNaN(saltRound)) {
            return res.status(400).json({ message: 'Invalid salt round' });
        }

        const hashedPassword = await bcrypt.hash(password, saltRound);

        const newUser = new Auth({
            user,
            fullName,
            email,
            password: hashedPassword
        });
        await newUser.save();

        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);

        const userInfo = { ...newUser._doc }
        delete userInfo.password

        return res.status(201).json({ message: 'User created successfully', success: true, status: 201, data: userInfo, token });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', success: false, status: 500, error: error.message });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide email and password' });
    }

    try {
        const existingUser = await Auth.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials!' });
        }

        const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET);

        const user = { ...existingUser._doc }
        delete user.password

        return res.status(200).json({ message: 'Login successful', success: true, status: 200, data: user, token });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', success: false, status: 500, error: error.message })
    }
}

const profile = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: 'Please provide user id' });
    }

    try {
        const userProfile = await Auth.findById(id)
        if (!userProfile) {
            return res.status(404).json({ message: 'User not found' });
        }

        const user = { ...userProfile._doc }
        delete user.password

        return res.status(200).json({ message: 'User profile', success: true, status: 200, data: user });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", success: false, status: 500, error: error.message })
    }
}

module.exports = {
    signup,
    login,
    profile
}