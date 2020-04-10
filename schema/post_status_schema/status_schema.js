'use strict';



const mongoose = require('mongoose');

const status = mongoose.Schema({
    subject:{type:String,required:true},
    title:{type:String,required:true},
    main:{type:String,required:true},
    reply:{type:String},
    time : { type : Date, default: Date.now }
})

module.exports = mongoose.model('status',status)