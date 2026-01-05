import { TopicModel} from "@/db/db";
import connectDB from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest){
    try{
        await connectDB();
        const body=await req.json();
    const {topic,pillarId}=body;
    
    const content=await TopicModel.create({
        topic:topic,pillarId:pillarId
    })

    const contentId=content._id;

    if(content){
        return NextResponse.json({message:"Content Created successfully",topicId:contentId},{status:200})
    }
    }catch(e){
        return NextResponse.json({message:"Server crashed"},{status:500})
    }
    
}



export async function GET(req:NextRequest){
    try{
        await connectDB();
        const body=await req.json();
    const {topic}=body;
    
    const content=await TopicModel.findOne({
        topic:topic
    })

    return NextResponse.json({message:content},{status:200})
    }catch(e){
        return NextResponse.json({message:"Server crashed"},{status:500})
    }
        
    
    
    
}


export async function DELETE(req:NextRequest){
    try{
        await connectDB();
        const body=await req.json()
        const {topic}=body

        const content=await TopicModel.findOneAndDelete({
            topic:topic
        })
        const contentId=content?._id
        
        return NextResponse.json({message:"Deleted Successfully",topicId:contentId},{status:200})
    }catch(e){
        return NextResponse.json({message:"Server crashed"},{status:500})
    }
}

export async function PUT(req:NextRequest) {
    try{
        await connectDB();

        const body=await req.json();
        const {topic,sectionId,pushOrPull}=body;

        if(pushOrPull=="push"){
            await TopicModel.updateOne({
            topic:topic
        },{
            $push:{sectionId:sectionId}
        })
        }else if(pushOrPull=="pull"){
            await TopicModel.updateOne({
            topic:topic
        },{
            $pull:{sectionId:sectionId}
        })
        }
        

        return NextResponse.json({message:"Updated successfully"},{status:200})

    }catch(e){
        return NextResponse.json({message:"Server Crashed"},{status:500})
    }
}