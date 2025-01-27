'use client'
import useAOS from "../animation/aos";

interface HeaderTitleProps {
    title: string; // Define the expected type of the title prop
  }
  
  export function HeaderTitle({ title }: HeaderTitleProps) {
    useAOS()
    return (
      <div data-aos="zoom-in">
        <h1 className="text-mycolor lg:text-4xl text-3xl py-10" >&#123; {title} &#125;</h1>             
      </div>
    );
  }
  