
const Database = require('../models/UserModel')




const getcontacts = async(req,res) =>{
     
    const getdata = await Database.find()

    console.log(getdata)
    res.json(getdata)


}  
const Postcontacts = async(req,res) =>{
    const {name,Phone,Message} = req.body
    if(!name||!Phone||!Message){
        throw new Error("All Fileds Are Mandatory")
    }

    console.log(req.body)
    const createcontact = await Database.create({
      name,
      Phone,
      Message

         
    })
    if(createcontact){
        console.log("Succesfuly Created")
    }
   

}  

module.exports = {getcontacts , Postcontacts}