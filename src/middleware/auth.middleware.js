const jwt = require('jsonwebtoken');
const Auth = require('../models/auth.model');

const authenticateUser = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await Auth.findById(decoded.id).select('-password');

            next();
        } catch (error) {
            return res.status(401).json({ error: 'Not authorized to access this route' });
        }
    }

    if (!token) {
        return res.status(401).send({ error: 'Not authorized, no token provided' });
    }
};

module.exports = {
    authenticateUser
};