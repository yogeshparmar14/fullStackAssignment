const mongoose =require("mongoose");

//defining schema
const date = new Date().getTime();

const movieSchema = new mongoose.Schema({
   
    title:{type:String,required:true,trim:true},
    year:{type:Number,required:true,trim:true},
    runtime:{type:String,required:true,trim:true},
    poster:{type:String,required:true,trim:true},
    rating:{type:Number,required:true},
    createdAt:{type:String,default:date},
    updatedAt:{type:Number},
     
    
})


//model

const movieModel = mongoose.model("movie",movieSchema)
module.exports = movieModel;