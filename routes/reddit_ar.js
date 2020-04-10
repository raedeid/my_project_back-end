'use strict';


const reddit = require('express').Router();
const User = require('./../schema/auth_schema/auth_schema')
const state = require('../schema/post_status_schema/post_status_class')
const jwt = require('jsonwebtoken')
const tokenMiddleware = require('./../routes/middleware/basicMiddleware');

reddit.post('/add',function(req,res,next){
    console.log('hi')
    console.log(req.body)
    try{
        state.create(req.body)
        res.status(300).sendStatus(300)
    }catch(e){
        console.log(e)
    }
})



reddit.get('/mainPage',async function(req,res,next){
    let output = await state.get()
    res.status(200).json({output})
    // console.log(output)
})


reddit.delete('/delete/:id',async function(req,res,next){
    let output = await state.delete(req.params.id)
    res.status(200)
})



reddit.put('/update/:_id',async function(req,res,next){
       try {
        console.log('hi',req.params._id)
        let output = await state.update(req.params._id,req.body)
        res.status(200).json(output)   
       } catch (error) {
           console.error(error)
       } // console.log(req.body)    
})


reddit.post('/signup',function(req,res,next){
    let user = new User(req.body)
    user.save()
    .then(output=>{
        let user = {
            id:output.id
        }
        console.log(user)
        return jwt.sign(user,'mysecret')
    }).then(token=>{
        // console.log(token)
        res.status(200).json(token)
    })
})


reddit.post('/signin',tokenMiddleware,function(req,res,next){
    res.status(200).json(req.token)
})
module.exports = reddit