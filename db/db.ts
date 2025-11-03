import mongoose from "mongoose";


const Schema=mongoose.Schema;
const ObjectId=mongoose.Schema.Types.ObjectId;

const ContentSchema=new Schema({
    pillar:{type:String,required:true},
    topic:{type:String,required:true},
    section:{type:String,required:true},
})

const ParagraphSchema=new Schema({
    contentId:{type:ObjectId,required:true,ref:'content'},
    paragraphNumber:{type:Number,required:true},
    paragraph:{type:String},
    imageUrl:[{type:String}]
})

export const ContentModel=mongoose.model('content',ContentSchema)
export const ParagraphModel=mongoose.model('paragraphs',ParagraphSchema)