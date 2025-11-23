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
    }).populate('topicId')

    const contentId=content?._id
        return NextResponse.json({message:content,pillarId:contentId},{status:200})
    
    }catch(e){
        return NextResponse.json({message:"Server Crashed"})
    }
    
}

export async function PUT(req:NextRequest) {
    try{
        await connectDB();

        const body=await req.json();
        const {pillar,topicId}=body;

        await PillarModel.updateOne({
            pillar:pillar
        },{
            $push:{topicId:topicId}
        })

        return NextResponse.json({message:"Updated successfully"},{status:200})

    }catch(e){
        return NextResponse.json({message:"Server Crashed"},{status:500})
    }
}