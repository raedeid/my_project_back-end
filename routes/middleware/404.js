'use strict';

function notFoundHandler(req,res,next){
    res.status(404)
    res.statusMessage = 'sorry page not found'
    res.json({error:'Not Found'})
}

module.exports = notFoundHandler