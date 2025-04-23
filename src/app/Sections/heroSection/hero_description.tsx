/**
 * 🔗 Stay Connected:
 * GitHub: https://github.com/kanuj21
 * Portfolio: https://kanuj21.github.io/myPortfolio/
 * 
 * 📜 this file is hero-section description about me. It is just after navbar.
 */


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
            <h1 className="lg:text-7xl text-5xl  font-bold">Hi! I am <span className="text-mycolor">Ambuj</span></h1>
            <div className="flex flex-row text-lg flex-1 items-baseline">
                <span className="md:text-5xl text-3xl pr-5">I am a</span>
                <h1 className= "font-bold lg:text-3xl text-2xl text-mycolor"><Typer /> </h1>
            </div>
            
            <h2 className="w-full text-justify text-md lg:text-lg leading-8 lg:leading-10">
            A <span className="text-mycolor font-semibold">full-stack software engineer</span> passionate about building 
            exceptional web experiences.  My expertise spans front-end 
            development with <span className="text-mycolor">React, Next.js, Material UI,</span> and <span className="text-mycolor">Tailwind CSS,</span> as well as back-end development 
            using <span className="text-mycolor">Java</span> and <span className="text-mycolor">Spring Boot.</span> I've honed my problem-solving skills through extensive practice 
            with data structures and algorithms <span className="text-mycolor">(600+ problems solved on 
            LeetCode & GeeksforGeeks).</span> I am seeking an opportunity to launch my 
            IT career and contribute to a forward-thinking team.  I'm a dedicated 
            learner, ready to embrace new challenges and make a real impact. 
            </h2>
            <div className="z-20 flex gap-2">
                <Button className={buttonVariants({ variant: "mybutton", size:"lg" })} asChild>
                <Link href="mailto:tomail.ambuj@gmail.com" >Hire Me</Link>
                </Button>
                <Button className={buttonVariants({ variant: "mybutton", size:"lg" })} asChild>
                <Link href="./Ambuj_Vats_FullStack.pdf" >Resume</Link>
                </Button>
            </div>
        </div>
    )
}


/**
 * 🚀 If you find this project useful, please ⭐️ it on GitHub and share it!  
 * 🔗 GitHub: https://github.com/kanuj21  
 * 💖 Your support keeps this project growing!  
 */