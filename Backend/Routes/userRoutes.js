const express =require("express")
const { signup,login,products,getProductById,updateProfile } = require("../Controllers/userController")
const router = express.Router()




router.post("/signup",signup)
router.post('/login', login);
router.get('/products',products)
router.get("/products/:id", getProductById);
router.post('/signup',signup)
router.put('/updateProfile', updateProfile);


module.exports=router

