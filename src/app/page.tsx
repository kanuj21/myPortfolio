
import Navbar from "@/components/Navbar/navbar";

import { HeroSection } from "@/app/Sections/heroSection/hero_main";
import { About } from "./Sections/about/about";
// import SkillMain from "./Sections/skills/skills-main";
import Footer from "./Sections/Footer/footer";
import Project from "./Sections/Projects/project";
// import SkillsShowcase from "./Sections/skills/skillsbutton";
import { SKILLS_DATA } from "./Data/skills-data";

export default function Home() {
  return (
    <div className="top-0 grid w-full grid-rows-[10px_1fr_10px] items-start justify-items-center  pb-20 gap-16  font-[family-name:var(--font-geist-sans)]">
      
      <div className="z-20 w-full lg:px-5">
        <Navbar/>
        
      </div>
      <div className="w-full py-4 pt-8 lg:p-4">
      <HeroSection />
      <About />
      {/* <SkillsShowcase skills={SKILLS_DATA} /> */}
      {/* <SkillMain/> */}
      <Project />
      </div>
      <Footer/>
    </div>
  );
}
