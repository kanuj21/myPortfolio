'use client'

import Image from "next/image";
import { AboutME } from "./about_text";
import { AboutImg } from "./about_img";
import { HeaderTitle } from "@/components/myui/header";
import { AboutImgMobile } from "./about-pic-mobile";


export function About() {
    return (
        <div className="flex flex-col py-12 items-center justify-center">
            <HeaderTitle title="About Me"/>
            <div className="flex md:flex-row flex-col gap-5 justify-center items-start px-5 lg:px-10 translate-y-8">
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
