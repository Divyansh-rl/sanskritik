import { ContentModel } from "@/db/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try{
        const body=await req.json();
    const {pillar,topic,section}=body;
    
    const content=await ContentModel.create({
        pillar,
        topic,
        section
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
    const {pillar,topic,section}=body;
    
    const content=await ContentModel.findOne({
        pillar,
        topic,
        section
    })

    if(content){
        return NextResponse.json({message:content},{status:200})
    }
    }catch(e){
        return NextResponse.json({message:"Server crashed"},{status:500})
    }
    
}