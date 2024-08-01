const express = require("express");
const router = express.Router();
const { adminLogin,userList,productadd,productlist,getProductById,updateProduct,updateUserStatus,deleteproduct} = require('../Controllers/adminController');
const{addCategory,getCategories,deleteCategory }= require('../Controllers/categoryController')
const upload = require('../Middleware/Multer');




router.post('/adminlogin', adminLogin);

router.get('/users', userList);

router.put('/user/status/:id', updateUserStatus);

router.post('/productadd',upload.single('imageFile'),productadd);

router.delete('/deleteproduct',deleteproduct);

router.get('/productlist', productlist);

router.get('/product/:id', getProductById);

router.put('/updateproduct/:id',updateProduct)

router.post('/addcategory', addCategory);

router.get('/getcategory',getCategories);

router.delete('/deletecategory/:id',deleteCategory);




module.exports = router;

