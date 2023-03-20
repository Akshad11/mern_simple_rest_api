require('dotenv').config();
const express = require('express')
const app = express()
require('./db/connect')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./routes/routerc')


const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())




app.use(router)
app.listen(PORT, () => {
    console.log(`Sever is live ${PORT}`)
})