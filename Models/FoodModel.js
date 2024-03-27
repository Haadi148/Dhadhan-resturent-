import mongoose from "mongoose";


const foodSchema = mongoose.Schema({
    name:{
            type:String,
            required:true
        
    },
    image:{
        type:String,
        required:true
    
},
category:{
    type:String,
    required:true

},
description:{
    type:String,
    required:true

},
    price:{
            type:Number,
            required:true
        
    },
   
    

})

const food = mongoose.model('foods', foodSchema)
export default food