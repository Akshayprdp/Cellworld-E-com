const express = require("express");
const router = express.Router();
const { adminLogin,userList,productadd,productlist,getProductById,updateProduct,updateUserStatus } = require('../Controllers/adminController');

const{addCategory}= require('../Controllers/categoryController')

const upload = require('../Middleware/Multer');




router.post('/adminlogin', adminLogin);

router.get('/users', userList);

router.put('/user/status/:id', updateUserStatus);

router.post('/productadd',upload.single('imageFile'),productadd);

router.get('/productlist', productlist);

router.get('/product/:id', getProductById);

router.put('/updateproduct/:id',updateProduct)

router.put('./addcategory',addCategory)





module.exports = router;

