import mongoose from "mongoose";


const Schema=mongoose.Schema;
const ObjectId=mongoose.Schema.Types.ObjectId;

const PillarSchema=new Schema({
    pillar:{type:String,required:true},
    topicId:[{type:ObjectId,ref:'topics'}],
    sectionId:[{type:ObjectId,ref:'sections'}],
    subTopicId:[{type:ObjectId,ref:'paragraphs'}]
})

const TopicSchema=new Schema({
    topic:{type:String},
    pillarId:{type:ObjectId,ref:'pillars'},
    sectionId:[{type:ObjectId,ref:'sections'}],
    subTopicId:[{type:ObjectId,ref:'paragraphs'}]
})

const SectionSchema=new Schema({
    section:{type:String},
    topic:{type:String},
    pillarId:{type:ObjectId,ref:'pillars'},
    topicId:{type:ObjectId,ref:'topics'},
    subTopicId:[{type:ObjectId,ref:'paragraphs'}]
})

const ParagraphSchema=new Schema({
     subTopic:{type:String},
    section:{type:String},
    topic:{type:String},
    pillarId:{type:ObjectId,ref:'pillars'},
    topicId:{type:ObjectId,ref:'topics'},
    sectionId:{type:ObjectId,ref:'sections'},
    paragraph:{type:String}
})

export const PillarModel=mongoose.model('pillars',PillarSchema)
export const TopicModel=mongoose.model('topics',TopicSchema)
export const SectionModel=mongoose.model('sections',SectionSchema)
export const ParagraphModel=mongoose.model('paragraphs',ParagraphSchema)