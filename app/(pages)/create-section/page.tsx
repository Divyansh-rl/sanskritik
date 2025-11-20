'use client'
import { Header } from "@/components/header";
import { ListNav } from "@/components/list";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupButton } from "@/components/ui/input-group";
import { useSelectStore } from "@/lib/store";
import { ArrowRight, CirclePlus, CircleX, Divide, Landmark, Menu, Pencil, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import TextareaAutosize from 'react-textarea-autosize';

export const liName=["Section I","Section II"]

export const subTopicNameI=["Geographical and Chronological Context","Urban Planning and Societal Organization","Economy, Technology, and Trade","Art, Script, and Religion","Decline and Legacy"]




export default function Home() {
    const [image, setImage] = useState("/architecture_main_page/Mohenjo-daro.jpg")
    const [image2, setImage2] = useState("/architecture_main_page/khajuraho-temples-in-madhya-pradesh-1.jpg")
    const [image3, setImage3] = useState("/architecture_main_page/Tomb_of_Shah_Rukn-e-Alam_2014-07-31.jpg")
    const [image4, setImage4] = useState("/architecture_main_page/pexels-sayan-purakait-716722737-18414740.jpg")

const onImageChange = (event:any) => {
 if (event.target.files && event.target.files[0]) {
setImage(URL.createObjectURL(event.target.files[0]));
 }
}

const onImageChange2 = (event:any) => {
 if (event.target.files && event.target.files[0]) {
setImage2(URL.createObjectURL(event.target.files[0]));
 }
}

const onImageChange3 = (event:any) => {
 if (event.target.files && event.target.files[0]) {
setImage3(URL.createObjectURL(event.target.files[0]));
 }
}

const onImageChange4 = (event:any) => {
 if (event.target.files && event.target.files[0]) {
setImage4(URL.createObjectURL(event.target.files[0]));
 }
}
    
    const [title,setTitle]=useState("Architecture");
    const [titleEdit,setTitleEdit]=useState(false);
    const [hovering,setHovering]=useState(false);

    const [ImageEdit,setImageEdit]=useState(false)

    const topic=useSelectStore((state)=>state.topic)
    const section=useSelectStore((state)=>state.section)

    const [paragraphs,setParagraphs]=useState([<div className="w-full h-auto flex gap-5 items-center">
                        
                        <div className="w-full h-auto flex flex-col gap-6">
                            <div className="w-96 h-auto text-2xl flex items-center gap-2"><Input type="text" placeholder="Enter Title of your paragraph"></Input><Button>Submit</Button></div>
                            <div className="w-full h-auto text-[18px]">
                                <div className="grid w-full max-w-sm gap-6">
                                    <InputGroup>
                                        <TextareaAutosize
                                    data-slot="input-group-control"
                                    className="flex field-sizing-content min-h-16 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base transition-[color,box-shadow] outline-none md:text-sm"
                                    placeholder="Autoresize textarea..."
                                    />
                                        <InputGroupAddon align="block-end">
                                            <InputGroupButton className="ml-auto" size="sm" variant="default">
                                                Submit
                                            </InputGroupButton>
                                        </InputGroupAddon>
                                    </InputGroup>
      
                                </div>
                            </div>
                        </div>

                        {/* <Image  width={0} height={0} className="w-full h-full" sizes="100vw" src="/architecture_main_page/Mohenjo-daro.jpg" alt="err"></Image> */}


                    </div>])

    function incParas(){
        setParagraphs(prevItems=>[...prevItems,<div className="w-full h-auto flex gap-5 items-center">
                        
                        <div className="w-full h-auto flex flex-col gap-6">
                            <div className="w-96 h-auto text-2xl flex items-center gap-2"><Input type="text" placeholder="Enter Title of your paragraph"></Input><Button>Submit</Button></div>
                            <div className="w-full h-auto text-[18px]">
                                <div className="grid w-full max-w-sm gap-6">
                                    <InputGroup>
                                        <TextareaAutosize
                                    data-slot="input-group-control"
                                    className="flex field-sizing-content min-h-16 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base transition-[color,box-shadow] outline-none md:text-sm"
                                    placeholder="Autoresize textarea..."
                                    />
                                        <InputGroupAddon align="block-end">
                                            <InputGroupButton className="ml-auto" size="sm" variant="default">
                                                Submit
                                            </InputGroupButton>
                                        </InputGroupAddon>
                                    </InputGroup>
      
                                </div>
                            </div>
                        </div>

                        {/* <Image  width={0} height={0} className="w-full h-full" sizes="100vw" src="/architecture_main_page/Mohenjo-daro.jpg" alt="err"></Image> */}


                    </div>])
    }

  return (
    <div className="w-full h-full bg-[#eee8c3] text-[#372111] flex flex-col gap-18">
      {/*Header*/}
      <Header/>

    <div className="w-full h-auto flex flex-col gap-0 ">
        <div className="w-full h-22 flex justify-center items-center py-2 px-2">
          <div className="w-auto h-18 text-5xl/16 ">{titleEdit?<div>
            <input onChange={(e)=>setTitle(e.target.value)} value={title}></input>
            {titleEdit?<Button onClick={()=>setTitleEdit(false)}>Save</Button>:<></>}
            </div>:<div className="flex" onMouseLeave={()=>setHovering(false)} onMouseOver={()=>setHovering(true)}>{title}{hovering?<Pencil className="cursor-pointer" onClick={()=>setTitleEdit(true)}></Pencil>:<></>}</div>}</div>
      </div>
        
      <div className="w-full flex justify-center">
            <div className="w-228 h-auto flex flex-col gap-6 px-7 py-9">
                <div className="w-full h-71.4 flex gap-6">
                    <div className="flex justify-center items-center w-[415.5px] h-[286.5px] ">
                        {image==""?<input type="file" onChange={onImageChange}></input>:(ImageEdit==true?<><div className=" absolute w-[375.5px] h-[246.5px] top-84 left-130 flex justify-end"><X className="m-2 cursor-pointer bg-red-500" onClick={()=>setImage("")}></X></div><Image width={0} height={0} sizes="100vw" className="w-[375.5px] h-[246.5px] rounded-xl shadow-md shadow-[hsl(0,30%,20%,50%)] cursor-pointer"  src={image} alt="err" /></>:<Image width={0} height={0} sizes="100vw" className="w-[375.5px] h-[246.5px] transition-all duration-175 rounded-xl hover:rounded-2xl  hover:w-[415.5px] hover:h-[286.5px] shadow-md shadow-[hsl(0,30%,20%,50%)] hover:shadow-xl cursor-pointer"  src={image} alt="err" />)}
                    </div>
                    <div className="flex justify-center items-center w-[415.5px] h-[286.5px] ">
                        {image2==""?<input type="file" onChange={onImageChange2}></input>:(ImageEdit==true?<><div className=" absolute w-[375.5px] h-[246.5px] top-84 left-223.875 flex justify-end"><X className="m-2 cursor-pointer bg-red-500" onClick={()=>setImage2("")}></X></div><Image width={0} height={0} sizes="100vw" className="w-[375.5px] h-[246.5px] rounded-xl shadow-md shadow-[hsl(0,30%,20%,50%)] cursor-pointer"  src={image2} alt="err" /></>:<Image width={0} height={0} sizes="100vw" className="w-[375.5px] h-[246.5px] transition-all duration-175 rounded-xl hover:rounded-2xl  hover:w-[415.5px] hover:h-[286.5px] shadow-md shadow-[hsl(0,30%,20%,50%)] hover:shadow-xl cursor-pointer"  src={image2} alt="err" />)}
                    </div>
                </div>
                <div className="w-full h-71.4 flex gap-6">
                        <div className="flex justify-center items-center w-[415.5px] h-[286.5px] ">
                        {image3==""?<input type="file" onChange={onImageChange3}></input>:(ImageEdit==true?<><div className=" absolute w-[375.5px] h-[246.5px] top-145.625 left-130 flex justify-end"><X className="m-2 cursor-pointer bg-red-500" onClick={()=>setImage3("")}></X></div><Image width={0} height={0} sizes="100vw" className="w-[375.5px] h-[246.5px] rounded-xl shadow-md shadow-[hsl(0,30%,20%,50%)] cursor-pointer"  src={image3} alt="err" /></>:<Image width={0} height={0} sizes="100vw" className="w-[375.5px] h-[246.5px] transition-all duration-175 rounded-xl hover:rounded-2xl  hover:w-[415.5px] hover:h-[286.5px] shadow-md shadow-[hsl(0,30%,20%,50%)] hover:shadow-xl cursor-pointer"  src={image3} alt="err" />)}
                    </div>
                    <div className="flex justify-center items-center w-[415.5px] h-[286.5px] ">
                        {image4==""?<input type="file" onChange={onImageChange4}></input>:(ImageEdit==true?<><div className=" absolute w-[375.5px] h-[246.5px] top-145.625 left-223.875 flex justify-end"><X className="m-2 cursor-pointer bg-red-500" onClick={()=>setImage4("")}></X></div><Image width={0} height={0} sizes="100vw" className="w-[375.5px] h-[246.5px] rounded-xl shadow-md shadow-[hsl(0,30%,20%,50%)] cursor-pointer"  src={image4} alt="err" /></>:<Image width={0} height={0} sizes="100vw" className="w-[375.5px] h-[246.5px] transition-all duration-175 rounded-xl hover:rounded-2xl  hover:w-[415.5px] hover:h-[286.5px] shadow-md shadow-[hsl(0,30%,20%,50%)] hover:shadow-xl cursor-pointer"  src={image4} alt="err" />)}
                    </div>
                </div>
            </div>
            <div>
                {ImageEdit?<Button onClick={()=>setImageEdit(false)}>save</Button>:<Button onClick={()=>setImageEdit(true)}>edit</Button>}
            </div>
      </div>
    </div>
      

    
      <div className="w-full h-full flex gap-12 px-24">
            <div className="min-w-90 h-full">
                <div className="w-full h-auto px-5 py-5 bg-[hsl(0,30%,20%,10%)] rounded-2xl flex flex-col ">
                    <div className="w-auto h-auto mt-3 mx-2">
                        <div  className="w-auto h-auto flex items-center text-[22px] mb-4">
                            Table of Contents
                        </div>
                    </div>

                    <div >
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
                    </div>
                    
                </div>
                
            </div>

            <div className="w-auto h-full">
                <div className=" flex justify-end"><Button onClick={incParas}>Add</Button></div>
                <div className="w-full h-full pl-7 py-21 flex flex-col gap-12">
                    <div className="w-full h-auto flex gap-5 items-center">
                        
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

                        <Image  width={0} height={0} className="w-full h-full" sizes="100vw" src="/architecture_main_page/khajuraho-temples-in-madhya-pradesh-1.jpg" alt="err"></Image>


                    </div>


                    {/* <div className="w-full h-auto flex gap-5 items-center">
                        
                        <div className="w-full h-auto flex flex-col gap-6">
                            <div className="w-96 h-auto text-2xl flex items-center gap-2"><Input type="text" placeholder="Enter Title of your paragraph"></Input><Button>Submit</Button></div>
                            <div className="w-full h-auto text-[18px]">
                                <div className="grid w-full max-w-sm gap-6">
                                    <InputGroup>
                                        <TextareaAutosize
                                    data-slot="input-group-control"
                                    className="flex field-sizing-content min-h-16 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base transition-[color,box-shadow] outline-none md:text-sm"
                                    placeholder="Autoresize textarea..."
                                    />
                                        <InputGroupAddon align="block-end">
                                            <InputGroupButton className="ml-auto" size="sm" variant="default">
                                                Submit
                                            </InputGroupButton>
                                        </InputGroupAddon>
                                    </InputGroup>
      
                                </div>
                            </div>
                        </div>

                        <Image  width={0} height={0} className="w-full h-full" sizes="100vw" src="/architecture_main_page/Mohenjo-daro.jpg" alt="err"></Image>


                    </div> */}

                    {paragraphs.map((item,index)=><div key={index}>{item}</div>)}
                    
                    

                    
                    
                </div>
            </div>
      </div>
      
    </div>
  );
}
