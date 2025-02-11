'use client'

import Image from "next/image";
import { AboutME } from "./about_text";
import { AboutImg } from "./about_img";
import { HeaderTitle } from "@/components/myui/header";
import { AboutImgMobile } from "./about-pic-mobile";


export function About() {
    return (
        <div className="flex flex-col py-12 items-center justify-center">
            <HeaderTitle title="Meet Me"/>
            <div className="flex md:flex-row flex-col gap-5 justify-center items-start md:px-5 px-2 lg:px-10 translate-y-8">
              <div className="w-full md:hidden">
                <AboutImgMobile/>
              </div>
              <AboutME />
              <div className="">
                <AboutImg/>
              </div>
              
              
            </div>
            

        </div>
    );
}

/**
 * 🚀 If you find this project useful, please ⭐️ it on GitHub and share it!  
 * 🔗 GitHub: https://github.com/kanuj21  
 * 💖 Your support keeps this project growing!  
 */