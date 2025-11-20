import { create } from "zustand";

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