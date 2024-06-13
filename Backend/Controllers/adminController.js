const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const adminModel = require('../Model/adminModel');
const secretKey = 'your_secret_key'; 

const adminLogin = async (req, res) => {
    try {
        const { adminUsername, adminPassword } = req.body;

        // Find admin user by username
        const admin = await adminModel.findOne({ username: adminUsername });

        // Check if admin user exists
        if (admin) {
            // Compare passwords
            const isPasswordValid = await bcrypt.compare(adminPassword, admin.Password);
            if (isPasswordValid) {
                // Generate JWT token
                const token = jwt.sign({ id: admin._id }, secretKey, { expiresIn: '1h' });
                return res.json({ 
                    message: "Login successful", 
                    success: true, 
                    token, 
                    username: admin.username,
                    Emailaddress: admin.Emailaddress,
                    Phonenumber: admin.Phonenumber
                });
            } else {
                return res.json({ message: "Incorrect password", success: false });
            }
        } else {
            return res.json({ message: "User not found", success: false });
        }
    } catch (error) {
        console.error("Error in admin login:", error);
        return res.status(500).json({ message: "An error occurred", success: false });
    }
};

module.exports = {
    adminLogin
};
