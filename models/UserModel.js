const mongoose = require('mongoose')


const ContactShema = mongoose.Schema({
   
    name:{
        type:String,
        Required: true
    },
    Phone:{
        type:String,
        Required: true
    },
    Message:{
        type:String,
        Required: true
    }



})


module.exports = mongoose.model("Contacts" , ContactShema)