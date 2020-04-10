'use strict';


class Model {
    constructor(schema){
        this.schema = schema
    }
    get(_id){
        return _id ? this.schema.findById({_id}): this.schema.find({})
    }
    create(input){
        let output = new this.schema(input)
        return output.save() 
    }
    update(_id,new_obj){
        try {
            let output = this.schema.findByIdAndUpdate(_id,new_obj,{new:true})
            // console.log('my update',output) 
            return output    
        } catch (error) {
            console.error(error)
        }
        
    }
    delete(_id){
        return this.schema.findByIdAndDelete(_id)
    }
}

module.exports = Model