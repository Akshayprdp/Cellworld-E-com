const jwt = require('jsonwebtoken');
const secretKey = "your_secret_key"; // Use a secure key in a real application

module.exports = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }
    try {
        // const decoded = jwt.verify(token, secretKey);
        const decoded = jwt.verify(token, 'JWT');
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid token." });
    }
};
