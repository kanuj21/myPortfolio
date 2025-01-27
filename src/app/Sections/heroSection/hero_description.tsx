import { Button } from "@/components/ui/button";
import { Typer } from "./autotyper";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"
import { Binary, SquareTerminal } from "lucide-react"



export function Description(){
    

    return(
        <div className="flex flex-col gap-5 justify-start items-start ">
            <div className="flex lg:flex-row flex-col absolute z-0 opacity-10 overflow-clip">
                        <SquareTerminal className="size-72"  strokeWidth={0.25} />
                        <Binary className="size-72" strokeWidth={0.25} />
            </div>
            <h1 className="lg:text-7xl text-5xl  font-bold">HI! I am <span className="text-mycolor">Ambuj</span></h1>
            <div className="flex flex-row text-lg flex-1 items-baseline">
                <span className="md:text-5xl text-3xl pr-5">I am a</span>
                <h1 className= "font-bold lg:text-3xl text-2xl text-mycolor"><Typer /> </h1>
            </div>
            
            <h2 className="w-full text-justify text-lg leading-8">
            Hi there! I'm Ambuj Vats a passionate B.Tech 
            graduate in Information Technology, with a 
            knack for crafting innovative solutions 
            using React, Spring Boot, and APIs. Armed 
            with a solid foundation in IT and a thirst 
            for technological innovation, I thrive in the 
            dynamic world of web development. My journey 
            began with a curiosity-driven exploration of 
            </h2>
            <div className="z-20 flex gap-2">
                <Button className={buttonVariants({ variant: "mybutton", size:"lg" })} asChild>
                <Link href="mailto:tomail.ambuj@gmail.com" >Hire Me</Link>
                </Button>
                <Button className={buttonVariants({ variant: "mybutton", size:"lg" })} asChild>
                <Link href="./Resume.pdf" >Resume</Link>
                </Button>
            </div>
        </div>
    )
}