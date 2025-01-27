import { GitPullRequestClosed, 
         Braces, QrCode, SquareFunction
     } from "lucide-react"

export function Profile(){
    return(
        <div className="flex w-full justify-center items-center">
            <div className="absolute grid grid-cols-2 z-0 opacity-20 overflow-hidden">
            <GitPullRequestClosed className="size-72" strokeWidth={0.25} />
            <Braces className="size-36" strokeWidth={0.2} />
            <QrCode className="size-36" strokeWidth={0.2} />
            <SquareFunction className="size-64" strokeWidth={0.2} />
            </div>
            <div data-aos="flip-left" className="z-10">
            <img
                src="https://avatars.githubusercontent.com/u/60128259?v=4"
                alt="Placeholder"
                width={250}
                height={250}
            />
            </div>
          
            
        </div>
    )
}