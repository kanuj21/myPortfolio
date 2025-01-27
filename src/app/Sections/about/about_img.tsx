
import useAOS from "@/components/animation/aos";
import Image from "next/image";


export function AboutImg() {
  useAOS()
    return (
        <div data-aos="flip-left" className="items-center">
            <div className="text-3xl text-center">
            
            </div>
            <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-mycolor translate-x-5 
               translate-y-5 rounded"
            ></div>

            <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-slate-900 opacity-10 duration-300 rounded overflow-hidden"></div>
              <Image
                src="https://avatars.githubusercontent.com/u/60128259?v=4"
                width={500}
                height={500}
                alt="Picture of the author"
                />
            </div>
          </div>

          
        </div>
    );
}