
const cors = require('cors')
const dotenv = require('dotenv').config()
const express = require('express')
const ConnectDB = require('./config/ConnectDB')
const app = express()
app.use(cors(
  {origin: "*"}
))
app.use(express.json())
const PORT = 3500

ConnectDB()

app.use('/' , require('./routes/root'))


app.listen(PORT , console.log(`Server Running On ${PORT}`) )




