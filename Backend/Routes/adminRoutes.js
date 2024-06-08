const express =require("express")
const { userList } = require("../Controllers/adminController")
const router = express.Router()


router.get("/users", userList);






module.exports=router