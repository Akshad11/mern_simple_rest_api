const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    Name: {
        required: true,
        type: String
    },
    PhoneNo: {
        required: true,
        type: String
    },
    Subject: {
        required: true,
        type: String
    },
    Attendance: {
        required: true,
        type: String
    }
})

const DataColl = new mongoose.model("DataSchema", DataSchema)
module.exports = DataColl;