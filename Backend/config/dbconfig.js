const mongoose=require("mongoose")

module.exports={dbconfig:async()=>{
    try{await mongoose.connect('mongodb://localhost:27017/cellworld').then(()=>{console.log('data base connected successfully')})}

    catch(Error){console.log(Error)}


}}

// mongodb+srv://akshayprdp21:CgJCafh1i9e20RSM@cluster0.prl9t2m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0