'use client'

import { useSelectStore,topicType, sectionType, subtopicType, useTopicStore, useSectionStore, useSubTopicStore} from "@/lib/store";
import { ArrowDown, ArrowRight, ChevronDown, ChevronRight, CirclePlus, Pencil, Trash } from "lucide-react";
import { ReactNode, useRef, useState } from "react";
import { Button } from "./ui/button";
import axios from "axios";
import { useParams } from "next/navigation";
import { Input } from "./ui/input";

interface listProps{
    liName:String,
    children?:ReactNode,
    type:String,
    key2:string
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

   const [hovering,setHovering]=useState(false);
    const [navItemEdit,setNavItemEdit]=useState(false);
    const [navItem,setNavItem]=useState(props.liName);

    const topicNew=useTopicStore((state)=>state.topicNew)
    const removeTopic=useTopicStore((state=>state.removeTopic))
    const removeSection=useSectionStore((state)=>state.removeSection)
    const sectionNew=useSectionStore((state)=>state.sectionNew)

    const params=useParams()
    const deleteItem=async()=>{
        if(props.type=='topic'){
            removeTopic(props.key2)
        
        const topic=await axios.request({
            method:'DELETE',
            url:"http://localhost:3000/api/v1/topic",
            data:{
                topic:props.liName
            }
        })

        //@ts-ignore
        const topicId=topic.data.topicId

        await axios.put("http://localhost:3000/api/v1/pillar/Architecture",{
            pillar:params.slug,
            topicId:topicId,
            pushOrPull:"pull"
        })

        }else if(props.type=='section'){
            removeSection(props.key2)

            const section=await axios.request({
            method:'DELETE',
            url:"http://localhost:3000/api/v1/section",
            data:{
                section:props.liName,topic:topic
            }
        })

        //@ts-ignore
        const sectionId=section.data.sectionId
        
        await axios.put("http://localhost:3000/api/v1/pillar/Architecture",{
            pillar:params.slug,
            sectionId:sectionId,
            pushOrPull:"pull"
        })

        await axios.put("http://localhost:3000/api/v1/topic",{
            topic:topic,
            sectionId:sectionId,
            pushOrPull:"pull"
        })

        }

    }

    const sectionRef=useRef<HTMLInputElement>(null)
    const setSectionNew=useSectionStore((state)=>state.setSectionNew)


    
        
    const [sections,setSections]=useState([<div className="w-auto h-12 text-2xl flex items-center gap-2 mb-4"><Input ref={sectionRef} type="text" placeholder="Enter section name"></Input><Button onClick={async()=>{
        const value=sectionRef.current?.value;
        if(typeof value=="string")
        await setSectionNew(value,props.liName)
        await addSectionsAPI()
    }}>Done</Button></div>]) 


    function incSections(){
        if(props.type=="topic"){
            setSections(prevItems=>[...prevItems,<div className="w-auto h-auto text-2xl flex items-center gap-2 mb-4"><Input ref={sectionRef} type="text" placeholder="Enter section name"></Input><Button onClick={async()=>{
        const value=sectionRef.current?.value;
        if(typeof value=="string")
        await setSectionNew(value,props.liName)
        await addSectionsAPI()
    }}>Done</Button></div>])
        }
    }
        

    async function addSectionsAPI(){
        const sectionName= sectionRef.current?.value    
        setSections(prevItems=>prevItems.slice(1))
        const pillar=await axios.get("http://localhost:3000/api/v1/pillar/Architecture")
        
        //@ts-ignore
        const pillarName=pillar.data.pillarName

        //@ts-ignore
        const pillarId=pillar.data.pillarId

        //@ts-ignore
        const topicId=pillar.data.message.topicId.filter((val)=>val.topic==props.liName)[0]._id
        
        const section=await axios.post("http://localhost:3000/api/v1/section",{
            section:sectionName,
            pillarId:pillarId,
            topicId:topicId,
            topic:props.liName
        })

        //@ts-ignore
        const sectionId=section.data.sectionId

        await axios.put("http://localhost:3000/api/v1/pillar/Architecture",{
            pillar:pillarName,
            sectionId:sectionId,
            pushOrPull:"push"
        })

        await axios.put("http://localhost:3000/api/v1/topic",{
            topic:props.liName,
            sectionId:sectionId,
            pushOrPull:"push"
        })
        
    }

    

    const setSubTopicNew=useSubTopicStore((state)=>state.setSubTopicNew)
    const subTopicRef=useRef<HTMLInputElement>(null)

    const [subTopics,setSubTopics]=useState([<div className="w-auto h-12 text-2xl flex items-center gap-2 mb-4"><Input ref={subTopicRef} type="text" placeholder="Enter sub topic name"></Input><Button onClick={async()=>{
        const value=subTopicRef.current?.value;
        if(typeof value=="string")
        await setSubTopicNew(value,topic,section)
        await addSubTopicsAPI()
    }}>Done</Button></div>])

    function incSubTopics(){
        if(props.type=="section"){
            setSubTopics(prevItems=>[...prevItems,<div className="w-auto h-auto text-2xl flex items-center gap-2 mb-4"><Input ref={subTopicRef} type="text" placeholder="Enter sub topic name"></Input><Button onClick={async()=>{
        const value=subTopicRef.current?.value;
        if(typeof value=="string")
        await setSubTopicNew(value,topic,section)
        await addSubTopicsAPI()
    }}>Done</Button></div>])
        }
    }

    async function addSubTopicsAPI(){
        const subTopicName=subTopicRef.current?.value
        setSubTopics(prevItems=>prevItems.slice(1))
        const pillar=await axios.get("http://localhost:3000/api/v1/pillar/Architecture")

        //@ts-ignore
        const pillarName=pillar.data.pillarName

        //@ts-ignore
        const pillarId=pillar.data.pillarId

        //@ts-ignore
        const topicId=pillar.data.message.topicId.filter((val)=>val.topic==topic)[0]._id

        //@ts-ignore
        const sectionId=pillar.data.message.sectionId.filter((val)=>val.section==props.liName)[0]._id

        const subTopic=await axios.post("http://localhost:3000/api/v1/paragraph",{
            subTopic:subTopicName,
            section:props.liName,
            topic:topic,
            sectionId:sectionId,
            topicId:topicId,
            pillarId:pillarId
        })

        //@ts-ignore
        const subTopicId=subTopic.data.subTopicId

        await axios.put("http://localhost:3000/api/v1/pillar/Architecture",{
            pillar:pillarName,
            subTopicId:subTopicId,
            pushOrPull:"push"
        })

        await axios.put("http://localhost:3000/api/v1/topic",{
            topic:topic,
            subTopicId:subTopicId,
            pushOrPull:"push"
        })

        await axios.put("http://localhost:3000/api/v1/section",{
            section:props.liName,
            subTopicId:subTopicId,
            pushOrPull:"push"
        })
    }

    return (
    <li className="w-auto h-auto flex flex-col">
         <div className="flex items-center">
            <div onMouseOver={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} onClick={updateItem}  className={(props.type=='subTopic' && subTopic==props.liName)?"w-72 h-auto mb-4 flex items-center gap-3 rounded-[100px]  p-4 bg-[hsl(0,30%,20%,20%)] cursor-pointer":"w-72 h-auto mb-4 flex items-center gap-3 rounded-[100px]  p-4 transition-all duration-175 hover:bg-[hsl(0,30%,20%,20%)] cursor-pointer"}>
       <div className="w-6 h-6 flex items-center justify-center gap-2">
            {props.type=="topic"&&(topic==props.liName?<div><ChevronDown/></div>:<div><ChevronRight/></div>)}
            {props.type=="section"&&(section==props.liName?<div><ChevronDown/></div>:<div><ChevronRight/></div>)}
        </div>
        <div>{navItemEdit?<input onChange={(e)=>setNavItem(e.target.value)} value={navItem as string}></input>:navItem}</div>
        
    </div>
    <div>
     {/* {hovering?<div>{navItemEdit?<Button onClick={()=>setNavItemEdit(false)}>save</Button>:<div className="flex gap-2"><Pencil onClick={()=>setNavItemEdit(true)}></Pencil><CirclePlus onClick={incSections}></CirclePlus><Trash onClick={deleteItem}></Trash></div>}</div>:<></>}  */}
        {(topic==props.liName||section==props.liName)?<div  className="flex gap-2 h-auto"><Pencil onClick={()=>setNavItemEdit(true)}></Pencil><CirclePlus onClick={topic==props.liName?incSections:incSubTopics}></CirclePlus><Trash onClick={deleteItem}></Trash></div>:null}
    </div>
         </div>
         
        {topic==props.liName&&<div className="ml-4">{props.children}</div>}
        {topic==props.liName&&sections.map((value,index)=><div key={index} className="ml-4">{value}</div>)}

        {section==props.liName&&<div className="ml-4">{props.children}</div>}
        {section==props.liName&&subTopics.map((value,index)=><div key={index} className="ml-4">{value}</div>)}
    </li>
   
    )
}