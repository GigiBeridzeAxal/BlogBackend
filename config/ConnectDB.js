const mongoose = require('mongoose')


const ConnectDB = async() => {
    const Connect = await mongoose.connect(process.env.DB)
    
    if(Connect){
        console.log("You Succesfuly Connect Database")
        console.log(Connect.connection.name , Connect.connection.host)
    }else{
        console.log("You Cant Connect Database")
    }

}


module.exports = ConnectDB
