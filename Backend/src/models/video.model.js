import mongoose from "mongoose";
import aggregatePaginate from 'mongoose-aggregate-paginate-v2'

const vidoeSchema=new mongoose.Schema({
    thumbnail:{
        type:String,
        required:true,
        trim:true,
    },
    videoFile:{
        type:String,
        required:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        trim:true
    },
    duration:{
        type:number,
        required:true,
        trim:true
    },
    views:{
        type:number,
        required:true,
        trim:true
    },
    isPublished:{
        type:Boolean,
        default:true,
        required:true
    },
    id:{
        type:string,
        required:true,
        trim:true
    },
},{timestamps:true})

userSchema.plugin(aggregatePaginate)
const Video=mongoose.model('Video', vidoeSchema)