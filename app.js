'use strict';

const server = require('./lib/server.js')

const mongoose = require('mongoose');

const MONGOOSE_URI = 'mongodb://localhost:27017/my_project'
const mongoose_option = {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
}
mongoose.connect(MONGOOSE_URI,mongoose_option)
 .then(()=>console.log('database ready'))
 .catch(e=>console.error(e))

server.start()  