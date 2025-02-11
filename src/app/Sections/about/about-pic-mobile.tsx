import Image from "next/image";
import useAOS from "@/components/animation/aos";



export function AboutImgMobile() {
  useAOS()
    return (
        <div data-aos="flip-left" className=" relative w-full h-48 md:hidden  flex justify-center items-center">
            <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-mycolor"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Image
                src="https://avatars.githubusercontent.com/u/60128259?v=4"
                className={"object-contain rounded-lg"}
                width={300}
                height={300}
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-48 h-full  bg-mycolor opacity-10 md:opacity-60  rounded overflow-hidden"></div>
          </div>

    )
}

/**
 * 🚀 If you find this project useful, please ⭐️ it on GitHub and share it!  
 * 🔗 GitHub: https://github.com/kanuj21  
 * 💖 Your support keeps this project growing!  
 */