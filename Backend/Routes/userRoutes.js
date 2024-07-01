const express =require("express")
const { signup,login,products } = require("../Controllers/userController")
const router = express.Router()




router.post("/signup",signup)
router.post('/login', login);
router.get('/products',products)


module.exports=router

