'use client'
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import {Select, SelectContent, SelectGroup, SelectTrigger, SelectValue, SelectItem, SelectLabel } from "@/components/ui/select"
import { useState } from "react";


export default function CreatePage(){

    const [selectedItem,setSelectedItem]=useState("");

    const items=[
        {value:"I",content:"Pillar I: Architectural Grandeur"},
        {value:"II",content:"Pillar II: The Rhythms of Life"},
        {value:"III",content:"Pillar III: The Colors of Celebration"},
        {value:"IV",content:"Pillar IV: The Fabric of Identity"},
        {value:"V",content:"Pillar V: The Flavors of the Land"},
        {value:"VI",content:"Pillar VI: The Power of Words"}
    ]

    const itemsT1=[
        {value:"1",content:"Spotlight: The Taj Mahal"},
        {value:"2",content:"Ancient Foundations"},
        {value:"3",content:"Hindu Temple Architecture"},
        {value:"4",content:"The Indo-Islamic Fusion"},
        {value:"5",content:"The Colonial Imprint"}
    ]

    const itemsT2=[
        {value:"1",content:"Spotlight: Bharatanatyam"},
        {value:"2",content:"Classical Dance"},
        {value:"3",content:"Folk Dances"},
        {value:"4",content:"The Melodic Traditions"}
    ]

    const itemsT3=[
        {value:"1",content:"Spotlight: Diwali"},
        {value:"2",content:"Holi: The Festival of Colors"},
        {value:"3",content:"Major Religious Festivals"},
        {value:"4",content:"The Social Fabric: Family and Marriage"},
    ]

    const itemsT4=[
        {value:"1",content:"Spotlight: The Banarasi Silk Saree"},
        {value:"2",content:"A Rich Tapestry"},
        {value:"3",content:"Visual Arts Through Time"},
        {value:"4",content:"Traditional Attire and its Symbolism"},
    ]

    const itemsT5=[
        {value:"1",content:"Spotlight: North Indian Cuisine"},
        {value:"2",content:"South Indian Cuisine"},
        {value:"3",content:"East Indian Cuisine"},
        {value:"4",content:"West Indian Cuisine"}
    ]

    const itemsT6=[
        {value:"1",content:"Spotlight: The Great Epics"},
        {value:"2",content:"Ancient Foundations"},
        {value:"3",content:"A Land of Many Tongues"},
        {value:"4",content:"Modern Voices"}
    ]

    const section=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX"]

    const itemSelected=(item:string)=>{
        setSelectedItem(item);
    }


    return (
        <div className="w-full h-screen bg-[#eee8c3] text-[#372111] flex flex-col gap-18">
            <Header/>

            <div className="w-full h-auto px-2 py-2 flex justify-center">
                <div className="w-auto h-auto bg-[hsl(0,30%,25%,10%)] flex flex-col gap-12 items-center justify-center px-20 py-8 rounded-3xl">
                    <div className="w-104 h-18 text-5xl/16 ">
                        Enter the details
                    </div>
                    
                    
                    <div className="w-168 h-auto flex flex-col gap-8 ">
                        <div className="w-168 h-10 flex justify-between items-center px-2">
                            <div className="w-auto h-8 text-2xl/8">
                                Pillar Name
                            </div>
                            <Select >
                                <SelectTrigger className="w-60 h-10">
                                    <SelectValue placeholder="Select Pillar"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Pillars</SelectLabel>
                                            {items.map((it)=><SelectItem onMouseDown={()=>itemSelected(it.value)} key={it.value} value={it.value}>{it.content}</SelectItem>)}
                                        </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="w-168 h-10 flex justify-between items-center px-2">
                            <div className="w-auto h-8 text-2xl/8">
                                Topic Name
                            </div>
                            <Select >
                                <SelectTrigger className="w-60 h-10">
                                    <SelectValue placeholder="Select Topic"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Topics</SelectLabel>
                                            {selectedItem=='I'&&itemsT1.map((it)=><SelectItem key={it.value} value={it.value}>{it.content}</SelectItem>)}
                                            {selectedItem=='II'&&itemsT2.map((it)=><SelectItem key={it.value} value={it.value}>{it.content}</SelectItem>)}
                                            {selectedItem=='III'&&itemsT3.map((it)=><SelectItem key={it.value} value={it.value}>{it.content}</SelectItem>)}
                                            {selectedItem=='IV'&&itemsT4.map((it)=><SelectItem key={it.value} value={it.value}>{it.content}</SelectItem>)}
                                            {selectedItem=='V'&&itemsT5.map((it)=><SelectItem key={it.value} value={it.value}>{it.content}</SelectItem>)}
                                            {selectedItem=='VI'&&itemsT6.map((it)=><SelectItem key={it.value} value={it.value}>{it.content}</SelectItem>)}
                                        </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                       <div className="w-168 h-10 flex justify-between items-center px-2">
                            <div className="w-auto h-8 text-2xl/8">
                                Section Name
                            </div>
                            <Select >
                                <SelectTrigger className="w-60 h-10">
                                    <SelectValue placeholder="Select Section"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Section</SelectLabel>
                                            {section.map((it)=><SelectItem key={it} value={it}>{it}</SelectItem>)}
                                        </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="w-full h-12 flex justify-center items-center">
                        <Button className="h-full w-20 flex justify-center items-center text-[#EEE8C3] bg-[#1B495F] rounded-[8px] hover:bg-[#166988] hover:text-[#e5dba2] hover:rounded-2xl transition-all delay-50 duration-150">Submit</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}