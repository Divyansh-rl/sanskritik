'use client'

import { useSelectStore,topicType, sectionType, subtopicType} from "@/lib/store";
import { ArrowDown, ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { ReactNode, useState } from "react";

interface listProps{
    liName:String,
    children?:ReactNode,
    type:String
}

export function ListNav(props:listProps){
    
    const topic=useSelectStore((state)=>state.topic)
    const selectTopic=useSelectStore((state)=>state.selectTopic)
    const selectSection=useSelectStore((state=>state.selectSection))
    const selectSubTopic=useSelectStore((state=>state.selectSubTopic))
    const section=useSelectStore((state=>state.section))
    const subTopic=useSelectStore((state)=>state.subtopic)


    function updateItem(){
        if(props.type=='topic'){
            if(topic==props.liName){
                selectTopic("")
                selectSection("")
                selectSubTopic("")
            }else{
                selectTopic(props.liName as topicType)
            }
        }else if (props.type=='section'){
            if(section==props.liName){
                selectSection("")
            }else{
                selectSection(props.liName as sectionType)
            }
            
        }else{
            if(subTopic==props.liName){
                selectSubTopic("")
            }else{
                selectSubTopic(props.liName as subtopicType)
            }
            
        }
    }

   

  
    return (
    <li className="w-auto h-auto flex flex-col">
         <div onClick={updateItem}  className={(props.type=='subTopic' && subTopic==props.liName)?"w-72 h-auto mb-4 flex items-center gap-3 rounded-[100px]  p-4 bg-[hsl(0,30%,20%,20%)] cursor-pointer":"w-72 h-auto mb-4 flex items-center gap-3 rounded-[100px]  p-4 transition-all duration-175 hover:bg-[hsl(0,30%,20%,20%)] cursor-pointer"}>
       <div className="w-6 h-6 flex items-center justify-center gap-2">
            {props.type=="topic"&&(topic==props.liName?<div><ChevronDown/></div>:<div><ChevronRight/></div>)}
            {props.type=="section"&&(section==props.liName?<div><ChevronDown/></div>:<div><ChevronRight/></div>)}
        </div>
        <div>{props.liName}</div>
        
    </div>
        <div className="ml-4">{props.children}</div>
    </li>
   
    )
}