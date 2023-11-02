const mongoose = require('mongoose');


const Schema = mongoose.Schema


const infoSchema = new Schema({

    Impression:{
        type: Boolean,
        required: true,
    },
    Click:{
        type: Boolean,
        required: true,
    },
    hooverTime:{
        type: Number,
    }
},{timestamps:true})

mongoose.exports= mongoose.model('Info', infoSchema);