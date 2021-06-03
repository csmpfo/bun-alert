const mongoose = require('mongoose')
const router = require('../routes/routes.js')

const submitImageTemplate = new mongoose.Schema({
    location:{
        type:String,
        required:false
    },
    image:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('mytable', submitImageTemplate)

