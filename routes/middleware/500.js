'use strict';


function errorHandler(err,req,res,next){
    res.status(500)
    res.statusMessage = 'Oops server down'
    res.json({error:err})
}

module.exports = errorHandler