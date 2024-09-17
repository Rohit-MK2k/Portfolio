import { Button } from "@/components/ui/button"
import  Darkmodebtn  from "@/app/components/darkmodebtn"


const navber = () => {
  const navStyle = "h-screen bg-[#222222] text-white max-w-[20%] min-w-60" 
  return (
    <>
      <div className="h-screen dark:bg-black max-w-[20%] min-w-60 bg-[#f5f5f5] flex flex-col items-center">
        navber
        <Darkmodebtn/>
      </div>
    </>
  )
}

export default navber