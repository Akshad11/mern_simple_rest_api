require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE).then(() => {
    console.log('connect sucessful');
}).catch((e) => {
    console.log('No Connect')
})
