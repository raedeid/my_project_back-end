'use strict';

const base64 = require('base-64')
const User = require('./../../schema/auth_schema/auth_schema')
const jwt = require('jsonwebtoken')



const basicMiddleware = async function (req,res,next){
    console.log(req.headers.authorization.split(' ')[1])
    if(!req.headers.authorization){
        next('sign up first please')        
    }else{
        let output = req.headers.authorization.split(' ')[1]
        let [name,pass] = base64.decode(output).split(':')
        let outputOfCheck =await User.checker(name,pass)
        if(outputOfCheck){
            let myNewSignObject = {
                id:outputOfCheck.id,
                username:outputOfCheck.username,
                password : outputOfCheck.password,
            }
            req.token = jwt.sign(myNewSignObject,'mysecret')
            next()
        } else{
            next(outputOfCheck)
        }     
    }
}


module.exports = basicMiddleware