'use strict';


const Model = require('../model')

const schema  = require('../post_status_schema/status_schema')

class Status extends Model{}

module.exports = new Status(schema)