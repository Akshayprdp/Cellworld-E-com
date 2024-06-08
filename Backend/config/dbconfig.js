const mongoose=require("mongoose")

module.exports={dbconfig:async()=>{
    try{await mongoose.connect('mongodb://localhost:27017/cellworld').then(()=>{console.log('data base connected successfully')})}

    catch(Error){console.log(Error)}


}}