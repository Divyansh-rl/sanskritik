import { TopicModel} from "@/db/db";
import connectDB from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try{
        await connectDB();
        const body=await req.json();
    const {topic,topicNumber,pillarId}=body;
    
    const content=await TopicModel.create({
        topic:topic,topicNumber:topicNumber,pillarId:pillarId
    })

    if(content){
        return NextResponse.json({message:"Content Created successfully"},{status:200})
    }
    }catch(e){
        return NextResponse.json({message:"Server crashed"},{status:500})
    }
    
}

export async function GET(req:NextRequest){
    try{
        const body=await req.json();
    const {topicId}=body;
    
    const content=await TopicModel.find({
        topicId
    })

    if(content){
        return NextResponse.json({message:content},{status:200})
    }
    }catch(e){
        return NextResponse.json({message:"Server crashed"},{status:500})
    }
    
}