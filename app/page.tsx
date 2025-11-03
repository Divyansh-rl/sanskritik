'use client'
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { CirclePlus, CircleX, Divide, Pencil, X } from "lucide-react";
import { useState } from "react";


export default function Home() {
  const [newToF,setNewToF]=useState(false);

  
  return (
    <div className="w-full h-screen bg-[#eee8c3] text-[#372111] flex flex-col gap-18">
      {/*Header*/}
      <Header/>


      <div className="w-full h-22 flex justify-center items-center py-2 px-2">
          <div className="w-70 h-18 text-5xl/16">Architecture</div>
      </div>


      <div className="w-full h-full px-25">
          <div className="w-full flex justify-end gap-1">
              <Button onClick={()=>setNewToF(!newToF)} variant='outline' className="bg-[hsl(0,30%,25%,30%)] text-[#372111] hover:bg-[hsl(0,30%,25%,20%)] " size="sm" >{newToF?<CircleX/>:<CirclePlus/>}{newToF?<div>Cancel</div>:<div>New</div>}</Button>


              {/* <Button variant='outline' className="bg-[hsl(0,30%,25%,30%)] text-[#372111] hover:bg-[hsl(0,30%,25%,20%)]" size="sm" ><Pencil/>Edit</Button> */}
          </div>
          
          {newToF && <textarea className="w-full h-72 text-[18px]" placeholder="Enter your paragraph" />}
          {newToF && <div className="w-full flex justify-between">
            <select >
              <option value="someOption">Some option</option>
              <option value="otherOption">Other option</option>
            </select>
            <Button variant='outline' className="bg-[#1b495f] text-[#eee8c3] rounded-[8px] hover:rounded-2xl hover:bg-[#166988] hover:text-[#e5dba2]" size="sm" >Send</Button>
            </div>}
      </div>
    </div>
  );
}
