const mongoose = require("mongoose");
 module.exports=connectDB=async(req,res)=>{
   try {
       
    await mongoose.connect(process.env.db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("database connected...");
   } catch (error) {
    console.error(error);
   }



 }