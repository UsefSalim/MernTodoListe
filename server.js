require('dotenv').config({ path: "./config/.env" })

const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const itemRoutes = require('./routes/api/Item.routes')

const app = express()

//* ------------------------------------ BODY PARSER MIDDLEWEAR

app.use(bodyParser.json())

//*------------------------------------ Db CONNECT

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    // seUnifiedTopology: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Mongo Db Connected"))
  .catch(err => console.log(`error connection to the DB : ${err}`))

//* -------------------------------------Use Routes 

app.use('/api/items', itemRoutes)

//* ---- ---------------------------------Port APP
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`app Listning on Port : ${PORT}`))

