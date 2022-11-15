const mongoose = require('mongoose');
const {confug, config} = require('dotenv');
config()
async function connect(uri) {
   try {
    mongoose.connect(uri || 'mongodb://localhost/27019');
    console.log("connected to mongodb")
   } catch (error) {
    console.log(error.message)
    
   }
}


module.exports= connect