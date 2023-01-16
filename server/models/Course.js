const { Schema, default: mongoose, model } = require("mongoose");

const schema = new Schema({
    'name':{
        type:String ,
        required: true,
    },
    'code':{
        type:String ,
        required: true,
    },
    'seats':{
        type:String ,
        required: true,
    }
})

const Course = model('Course',schema,)
module.exports = {
    Course
}