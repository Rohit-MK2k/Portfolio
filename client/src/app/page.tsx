import Image from "next/image";
import Darkmodebtn from "./components/darkmodebtn";
import React from "react";

export default function Home() {
  return (
    <>
        <h1 className="text-2xl mt-8 text-center">
           <Darkmodebtn/>
        </h1>
    </>
  );
}
