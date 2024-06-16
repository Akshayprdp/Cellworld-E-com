const express = require("express");
const router = express.Router();
const { adminLogin,userList,productadd } = require('../Controllers/adminController');
const upload = require('../Middleware/Multer');




router.post('/adminlogin', adminLogin);

router.get('/users', userList);

router.post('/productadd',upload.single('imageFile'),productadd);


userList


module.exports = router;

