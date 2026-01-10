import { ParagraphModel} from "@/db/db";
import connectDB from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try{
        await connectDB();
        const body=await req.json();
    const {subTopic,section,topic,topicId,sectionId,pillarId}=body;
    
    const content=await ParagraphModel.create({
       subTopic:subTopic,section:section,topic:topic,topicId:topicId,sectionId:sectionId,pillarId:pillarId
    })

    const subTopicId=content?._id

    if(content){
        return NextResponse.json({message:"Content Created successfully",subTopicId:subTopicId},{status:200})
    }
    }catch(e){
        return NextResponse.json({message:"Server crashed"},{status:500})
    }
    
}

export async function GET(req:NextRequest){
    try{
        const body=await req.json();
    const {paragraphId}=body;
    
    const content=await ParagraphModel.find({
        paragraphId
    })

    if(content){
        return NextResponse.json({message:content},{status:200})
    }
    }catch(e){
        return NextResponse.json({message:"Server crashed"},{status:500})
    }
    
}

export async function DELETE(req:NextRequest) {
    try{
        const body=await req.json();
        const {subTopic,section,topic}=body

        const content=await ParagraphModel.findOneAndDelete({
            subTopic:subTopic,
            section:section,
            topic:topic
        })
    const contentId=content?._id
        
        return NextResponse.json({message:"Deleted Successfully",subTopicId:contentId},{status:200})
    }catch(e){
        return NextResponse.json({message:"Server crashed"},{status:500})
    }
}