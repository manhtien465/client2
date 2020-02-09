

const mongoose =require('mongoose')
const URL= "mongodb+srv://manhtien465:tien1234cluster0-vaatg.mongodb.net/test?retryWrites=true&w=majority"
const connectdb=async()=>{
      await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
      console.log("succesful");
      
}


module.exports = connectdb;
