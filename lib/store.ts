import { create } from "zustand";
import { v4 as uuidv4 } from 'uuid';

export type topicType="Ancient Foundations"|
    "Hindu Architecture"|
    "The Indo-Islamic Fusion"|
    "The Colonial Imprint"|""

export type sectionType=""|"Section I"|"Section II"

export type subtopicType="Geographical and Chronological Context"|"Urban Planning and Societal Organization"|"Economy, Technology, and Trade"|"Art, Script, and Religion"|"Decline and Legacy"|""

export interface stateType{
    topic:topicType,
    section:sectionType,
    subtopic:subtopicType,
    selectTopic:(selected:topicType)=>void,
    selectSection:(selected:sectionType)=>void,
    selectSubTopic:(selected:subtopicType)=>void
}


export const useSelectStore=create<stateType>((set)=>({
    topic:"",
    section:"",
    subtopic:"",
    selectTopic:(selected)=>{
        set(()=>({topic:selected}))
    },
    selectSection:(selected)=>{
        set(()=>({section:selected}))
    },
    selectSubTopic:(selected)=>{
        set(()=>({subtopic:selected}))
    }
}))

export interface paragraphType{
count:number,
incCount:()=>void,
decCount:()=>void
}

export const useParagraphStore=create<paragraphType>((set)=>({
    count:1,
    incCount:()=>{
        set((state)=>({count:state.count+1}))
    },
    decCount:()=>set((state)=>({count:state.count-1}))
}))

interface topicInterface{
    topicNew:{uuid:string,value:String}[],
    setTopicNew:(newItem:String)=>void,
    removeTopic:(uuid:string)=>void

}

export const useTopicStore=create<topicInterface>((set)=>({
    topicNew:[{uuid:uuidv4(),value:""}],
    setTopicNew:(newItem)=>{
        set((state)=>({topicNew:[...state.topicNew,{uuid:uuidv4(),value:newItem}]}))
    },
    removeTopic:(uuid)=>{
        set((state)=>({topicNew:state.topicNew.filter((e)=>e.uuid!=uuid)}))
    }
}))

interface sectionInterface{
    sectionNew:{uuid:string,value:String,topic:String}[],
    setSectionNew:(newItem:String,topic:String)=>void,
    removeSection:(uuid:string)=>void

}

export const useSectionStore=create<sectionInterface>((set)=>({
    sectionNew:[{uuid:uuidv4(),value:"",topic:""}],
    setSectionNew:(newItem,topic)=>{
        set((state)=>({sectionNew:[...state.sectionNew,{uuid:uuidv4(),value:newItem,topic:topic}]}))
    },
    removeSection:(uuid)=>{
        set((state)=>({sectionNew:state.sectionNew.filter((e)=>e.uuid!=uuid)}))
    }
}))

interface subTopicInterface{
    subTopicNew:{uuid:string,value:String,topic:String,section:String}[],
    setSubTopicNew:(newItem:String,topic:String,section:String)=>void,
    removeSubTopic:(uuid:string)=>void
}

export const useSubTopicStore=create<subTopicInterface>((set)=>({
    subTopicNew:[{uuid:uuidv4(),value:"",topic:"",section:""}],
    setSubTopicNew:(newItem,topic,section)=>{
        set((state)=>({subTopicNew:[...state.subTopicNew,{uuid:uuidv4(),value:newItem,topic:topic,section:section}]}))
    },
    removeSubTopic:(uuid)=>{
        set((state)=>({subTopicNew:state.subTopicNew.filter((e)=>e.uuid!=uuid)}))
    }
}))