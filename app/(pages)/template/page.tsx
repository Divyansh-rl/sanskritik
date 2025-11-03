'use client'
import { Header } from "@/components/header";
import { ListNav } from "@/components/list";
import { Button } from "@/components/ui/button";
import { useSelectStore } from "@/lib/store";
import { ArrowRight, CirclePlus, CircleX, Divide, Landmark, Menu, Pencil, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const liName=["Section I","Section II"]

export const subTopicNameI=["Geographical and Chronological Context","Urban Planning and Societal Organization","Economy, Technology, and Trade","Art, Script, and Religion","Decline and Legacy"]


export default function Home() {
  const [newToF,setNewToF]=useState(false);
    const [menu,setMenu]=useState(true);

    const topic=useSelectStore((state)=>state.topic)
    const section=useSelectStore((state)=>state.section)

  return (
    <div className="w-full h-full bg-[#eee8c3] text-[#372111] flex flex-col gap-18">
      {/*Header*/}
      <Header/>

    <div className="w-full h-auto flex flex-col gap-0 ">
        <div className="w-full h-22 flex justify-center items-center py-2 px-2">
          <div className="w-70 h-18 text-5xl/16 ">Architecture</div>
      </div>
        
      <div className="w-full flex justify-center">
            <div className="w-228 h-auto flex flex-col gap-6 px-7 py-9">
                <div className="w-full h-71.4 flex gap-6">
                    <div className="flex justify-center items-center w-[415.5px] h-[286.5px] ">
                        <Image width={415.5} className="w-[375.5px] h-[246.5px] transition-all duration-175 rounded-xl hover:rounded-2xl  hover:w-[415.5px] hover:h-[286.5px] shadow-md shadow-[hsl(0,30%,20%,50%)] hover:shadow-xl cursor-pointer" height={286.5} src="/architecture_main_page/Mohenjo-daro.jpg" alt="err" />
                    </div>
                    <div className="flex justify-center items-center w-[415.5px] h-[286.5px] ">
                        <Image width={415.5} className="w-[375.5px] h-[246.5px] transition-all duration-175 rounded-xl hover:rounded-2xl  hover:w-[415.5px] hover:h-[286.5px] shadow-md shadow-[hsl(0,30%,20%,50%)] hover:shadow-xl cursor-pointer" height={286.5} src="/architecture_main_page/khajuraho-temples-in-madhya-pradesh-1.jpg" alt="err" />
                    </div>
                </div>
                <div className="w-full h-71.4 flex gap-6">
                        <div className="flex justify-center items-center w-[415.5px] h-[286.5px] ">
                        <Image width={415.5} className="w-[375.5px] h-[246.5px] transition-all duration-175 rounded-xl hover:rounded-2xl  hover:w-[415.5px] hover:h-[286.5px] shadow-md shadow-[hsl(0,30%,20%,50%)] hover:shadow-xl cursor-pointer" height={286.5} src="/architecture_main_page/Tomb_of_Shah_Rukn-e-Alam_2014-07-31.jpg" alt="err" />
                    </div>
                    <div className="flex justify-center items-center w-[415.5px] h-[286.5px] ">
                        <Image width={415.5} className="w-[375.5px] h-[246.5px] transition-all duration-175 rounded-xl hover:rounded-2xl  hover:w-[415.5px] hover:h-[286.5px] shadow-md shadow-[hsl(0,30%,20%,50%)] hover:shadow-xl cursor-pointer" height={286.5} src="/architecture_main_page/pexels-sayan-purakait-716722737-18414740.jpg" alt="err" />
                    </div>
                </div>
            </div>
      </div>
    </div>
      

    
      <div className="w-full h-full flex gap-12 px-24">
            <div className="min-w-90 h-full">
                <div className="w-full h-auto px-5 pb-5 bg-[hsl(0,30%,20%,10%)] rounded-2xl flex flex-col ">
                    <div className="w-45 h-20 pt-3">
                        <div onClick={()=>setMenu(!menu)} className="w-14 h-14 flex items-center justify-center">
                            <Menu />
                        </div>
                    </div>

                   {menu&& <div >
                        {/*nav items*/}
                       <ul className="w-auto h-auto flex flex-col gap-3.5">
                            
                        <ListNav type="topic" liName="Ancient Foundations">
                            
                            {topic=="Ancient Foundations"&&<ul >
                                <ListNav type="section" liName="Section I">
                                    {section=="Section I"&&<ul>
                                        {subTopicNameI.map((value,index)=><ListNav type="subTopic" key={index} liName={value}></ListNav>)}
                                    </ul>}
                                </ListNav>
                            </ul>}
                        </ListNav>
                        
                       <ListNav type="topic" liName="Hindu Architecture"></ListNav>
                        <ListNav type="topic" liName="The Indo-Islamic Fusion"></ListNav>
                        <ListNav type="topic" liName="The Colonial Imprint"></ListNav>
                       </ul>
                       
                        

                        
                    </div>}
                    
                </div>
            </div>

            <div className="w-auto h-full">
                <div className="w-full h-full px-2 py-21 flex flex-col gap-12">
                    <div className="w-full h-auto flex flex-col gap-6">
                        <div className="w-full h-auto text-2xl">Geographical and Chronological Context</div>
                    <div className="w-full h-full text-[18px]">
                        The Indus Valley Civilization (IVC), also known as the Harappan Civilization, represents the Indian subcontinent's first foray into urbanism, flourishing as a Bronze Age culture from
                        approximately 3300 BCE to 1300 BCE.4 Its mature, most urbanized phase is dated from 2600
                        BCE to 1900 BCE.4 As one of the three earliest cradles of civilization, alongside Mesopotamia
                        and Ancient Egypt, the IVC was the most geographically extensive, covering a vast area that
                        includes modern-day Pakistan, northwestern India, and parts of northeastern Afghanistan.1 At
                        its peak, the population may have exceeded five million people.1 The civilization's heartland
                        was the alluvial plains of the Indus River and its tributaries, as well as the now-seasonal
                        Ghaggar-Hakra river system.1 Major urban centers that have been excavated include Harappa
                        and Mohenjo-daro in Pakistan, and Dholavira, Kalibangan, Lothal, and Rakhigarhi in India.1
                    </div>
                    </div>

                    <div className="w-full h-auto flex flex-col gap-6">
                        <div className="w-full h-auto text-2xl">Urban Planning and Societal Organization</div>
                    <div className="w-full h-full text-[18px]">
                        The most striking feature of the IVC is its highly sophisticated and standardized urban
                        planning, which suggests a coordinating authority of significant reach.1 Cities were
                        characterized by grid-pattern streets, elaborate public and domestic drainage systems, and
                        the widespread use of standardized baked bricks for construction.5 Major sites like
                        Mohenjo-daro and Harappa typically featured a bipartite layout, with a raised, fortified
                        "citadel" area containing major public structures and a larger "lower town" for residential and
                        commercial activities.5 The site of Dholavira in Gujarat is particularly notable for its unique
                        tripartite division into a citadel, a middle town, and a lower town, as well as for possessing the
                        world's earliest known water management system, which utilized a series of large reservoirs to
                        conserve rainwater.5 The presence of monumental public works, such as the Great Bath at
                        Mohenjo-daro and massive granaries found at several sites, points toward a form of municipal
                        or state-level organization capable of mobilizing labor and resources for civic projects.1
                        This evidence for advanced, centralized planning presents a unique historical paradox. While
                        the uniformity in urban design, weights, and measures implies a strong governing authority,
                        the archaeological record is conspicuously absent of the typical markers of such power seen
                        in contemporary civilizations. There are no grand palaces, royal tombs, or monumental
                        temples dedicated to specific deities or glorifying individual rulers.9 This suggests that the
                        political structure of the IVC may have been fundamentally different from the divine
                        monarchies of Egypt and Mesopotamia. Power may have resided not in a single king, but
                        perhaps in a council of elites, such as merchants, clan leaders, or a priestly class, whose
                        authority was expressed through civic order and commercial regulation rather than personal
                        aggrandizement. This challenges the universal applicability of the "divine king" model for early
                        urbanism and indicates that the subcontinent's first cities may have been driven more by
                        functional, civic imperatives than by monarchical ambition.
                    </div>
                    </div>
                    
                </div>
            </div>
      </div>
      
    </div>
  );
}
