import mongoose from "mongoose";


const Schema=mongoose.Schema;
const ObjectId=mongoose.Schema.Types.ObjectId;

const PillarSchema=new Schema({
    pillar:{type:String,required:true},
    topicId:[{type:ObjectId,ref:'topics'}]
})

const TopicSchema=new Schema({
    topic:{type:String},
    pillarId:{type:ObjectId,ref:'pillars'},
    sectionId:[{type:ObjectId,ref:'sections'}]
})

const SectionSchema=new Schema({
    section:{type:String},
    sectionNumber:Number,
    topicId:{type:ObjectId,ref:'topics'},
    paragraphId:[{type:ObjectId,ref:'paragraphs'}]
})

const ParagraphSchema=new Schema({
    title:{type:String,required:true},
    paragraph:{type:String},
    paragraphNumber:Number,
    sectionId:{type:ObjectId,ref:'sections'}
})

export const PillarModel=mongoose.model('pillars',PillarSchema)
export const TopicModel=mongoose.model('topics',TopicSchema)
export const SectionModel=mongoose.model('sections',SectionSchema)
export const ParagraphModel=mongoose.model('paragraphs',ParagraphSchema)