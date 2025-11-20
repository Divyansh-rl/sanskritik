import { SectionModel} from "@/db/db";
import connectDB from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try{
        await connectDB();
        const body=await req.json();
    const {section,sectionNumber,topicId}=body;
    
    const content=await SectionModel.create({
       section:section,sectionNumber:sectionNumber,topicId:topicId
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