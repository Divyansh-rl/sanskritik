import { SectionModel} from "@/db/db";
import connectDB from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try{
        await connectDB();
        const body=await req.json();
    const {section,topicId,pillarId,topic}=body;
    
    const content=await SectionModel.create({
       section:section,topicId:topicId,pillarId:pillarId,topic:topic
    })

    const contentId=content._id

    if(content){
        return NextResponse.json({message:"Content Created successfully",sectionId:contentId},{status:200})
    }
    }catch(e){
        return NextResponse.json({message:"Server crashed"},{status:500})
    }
    
}

export async function GET(req:NextRequest){
    try{
        await connectDB()
        const body=await req.json();
    const {sectionId}=body;
    
    const content=await SectionModel.find({
        sectionId
    })

    if(content){
        return NextResponse.json({message:content},{status:200})
    }
    }catch(e){
        return NextResponse.json({message:"Server crashed"},{status:500})
    }
    
}

export async function DELETE(req:NextRequest){
    try{
        await connectDB();
        const body=await req.json()
        const {section,topic}=body

        const content=await SectionModel.findOneAndDelete({
            section:section,
            topic:topic
        })
        const contentId=content?._id
        
        return NextResponse.json({message:"Deleted Successfully",sectionId:contentId},{status:200})
    }catch(e){
        return NextResponse.json({message:"Server crashed"},{status:500})
    }
}