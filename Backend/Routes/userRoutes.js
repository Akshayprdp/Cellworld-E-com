const express =require("express")
const { signup,login,products,getProductById } = require("../Controllers/userController")
const router = express.Router()




router.post("/signup",signup)
router.post('/login', login);
router.get('/products',products)
router.get("/products/:id", getProductById);


module.exports=router

