import { ParagraphModel } from "@/db/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try{
        const body=await req.json();
    const {contentId,paragraphNumber,paragraph,imageUrl}=body;
    
    const content=await ParagraphModel.create({
        contentId,
        paragraphNumber,
        paragraph,
        imageUrl:imageUrl
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
    const {contentId}=body;
    
    const content=await ParagraphModel.find({
        contentId
    })

    if(content){
        return NextResponse.json({message:content},{status:200})
    }
    }catch(e){
        return NextResponse.json({message:"Server crashed"},{status:500})
    }
    
}