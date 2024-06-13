const express = require("express");
const router = express.Router();
const { adminLogin } = require('../Controllers/adminController');



router.post('/adminlogin', adminLogin);




module.exports = router;

