const express = require("express");
const router = express.Router();
const { adminLogin,userList,productadd,productlist,getProductById,updateProduct,updateUserStatus } = require('../Controllers/adminController');
const upload = require('../Middleware/Multer');




router.post('/adminlogin', adminLogin);

router.get('/users', userList);

// router.put('/user/status/:id', updateUserStatus);
router.put('/user/status/:id', updateUserStatus);

router.post('/productadd',upload.single('imageFile'),productadd);

router.get('/productlist', productlist);

router.get('/product/:id', getProductById);

router.put('/updateproduct/:id',updateProduct)





module.exports = router;

