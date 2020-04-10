'use strict';

const express = require('express');

const cors = require('cors');

const morgan = require('morgan');

const server = express()
const router = require('../routes/reddit_ar')
const error_handler = require('../routes/middleware/500')
const not_found = require('../routes/middleware/404')

server.use(express.json())
server.use(morgan('dev'))
server.use(router)

server.use(cors())
server.use(error_handler)
server.use('*',not_found)

module.exports ={
    app:server,
    start:(port)=>{
        let PORT = 3333 || port
        server.listen(PORT,()=>{
            console.log(`hi i am listen ${PORT}`)
        }) 
    }
}