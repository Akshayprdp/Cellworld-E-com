const express = require("express");
const router = express.Router();
const { adminLogin,userList,productadd,productlist,getProductById,updateProduct } = require('../Controllers/adminController');
const upload = require('../Middleware/Multer');




router.post('/adminlogin', adminLogin);

router.get('/users', userList);

router.post('/productadd',upload.single('imageFile'),productadd);

router.get('/productlist', productlist);

router.get('/product/:id', getProductById);

router.put('/updateproduct/:id',updateProduct)



userList


module.exports = router;

