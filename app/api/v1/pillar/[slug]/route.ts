import {  PillarModel } from "@/db/db";
import connectDB from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try{
        await connectDB();
        const body=await req.json();
    const {pillar}=body;
    
    const content=await PillarModel.create({
        pillar
    })

    if(content){
        return NextResponse.json({message:"Pillar Created successfully"},{status:200})
    }else{
        return NextResponse.json({message:"Pillar not created, try again"})
    }
    }catch(e){
        return NextResponse.json({message:"Server crashed"},{status:500})
    }
    
}

interface paramsType{
    slug:string
}

export async function GET(req:NextRequest,{params}:{params:paramsType}){
    try{
        await connectDB();
    const slug=(await params).slug;

    const content=await PillarModel.findOne({
        pillar:slug
    }).populate('topicId').populate('sectionId').populate('subTopicId')

    const contentId=content?._id
    const pillarName=content?.pillar
        return NextResponse.json({message:content,pillarId:contentId,pillarName:pillarName},{status:200})
    
    }catch(e){
        return NextResponse.json({message:"Server Crashed"})
    }
    
}

export async function PUT(req:NextRequest) {
    try{
        await connectDB();

        const body=await req.json();
        const {pillar,topicId,pushOrPull,sectionId,subTopicId}=body;

        if(topicId){
            if(pushOrPull=="push"){
            await PillarModel.updateOne({
            pillar:pillar
        },{
            $push:{topicId:topicId}
        })
        }else if(pushOrPull=="pull"){
            await PillarModel.updateOne({
            pillar:pillar
        },{
            $pull:{topicId:topicId}
        })
        }
        }

        if(sectionId){
            if(pushOrPull=="push"){
            await PillarModel.updateOne({
            pillar:pillar
        },{
            $push:{sectionId:sectionId}
        })
        }else if(pushOrPull=="pull"){
            await PillarModel.updateOne({
            pillar:pillar
        },{
            $pull:{sectionId:sectionId}
        })
        }
        }

        if(subTopicId){
            if(pushOrPull=="push"){
            await PillarModel.updateOne({
            pillar:pillar
        },{
            $push:{subTopicId:subTopicId}
        })
        }else if(pushOrPull=="pull"){
            await PillarModel.updateOne({
            pillar:pillar
        },{
            $pull:{subTopicId:subTopicId}
        })
        }
        }
        
        

        return NextResponse.json({message:"Updated successfully"},{status:200})

    }catch(e){
        return NextResponse.json({message:"Server Crashed"},{status:500})
    }
}