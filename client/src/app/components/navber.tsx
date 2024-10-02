import { Button } from "@/components/ui/button"
import  Darkmodebtn  from "@/app/components/darkmodebtn"
import React from "react"
import Link from "next/link"


const navber = () => {
  const navStyle = "h-screen bg-[#222222] text-white max-w-[20%] min-w-60" 
  return (
    <>
      <div className="dark:bg-black max-w-[20%] min-w-60 bg-[#f5f5f5] flex flex-col items-center p-6">
        <div className="">

        </div>
        <div className="flex flex-col items-center py-6">
          <Link href="/home">Home</Link>
          <Link href="/github">My Github</Link>
          <Link href="/connect">Connect With Me</Link>
        </div>
        {/* <Link href="/home"></Link> */}
      </div>
    </>
  )
}

export default navber