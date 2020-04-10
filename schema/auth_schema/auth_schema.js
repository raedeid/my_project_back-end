'use strict';

// const 
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')


const auth = mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String}
})

auth.pre('save',async function(){
    try {
        this.password = await bcrypt.hash(this.password,5)
    } catch (error) {
        console.error(error)
    }
})

auth.statics.checker = async function(name,pass){
    let sample = await this.findOne({username:name})
    // console.log(sample)
    if(sample){
        let passCheck = bcrypt.compare(pass,sample.password)
        return passCheck ? sample : Promise.reject()
    }else{
        return Promise.reject()
    }
}
module.exports = mongoose.model('auth',auth)