
import Navbar from "@/components/Navbar/navbar";

import { HeroSection } from "@/app/Sections/heroSection/hero_main";
import { About } from "./Sections/about/about";
import SkillMain from "./Sections/skills/skills-main";
import Footer from "./Sections/Footer/footer";
import Project from "./Sections/Projects/project";
import Quotes from "./Sections/Quotes/quote";


export default function Home() {
  return (
    <div className="top-0 grid w-full grid-rows-[10px_1fr_10px] items-start justify-items-center  pb-20 gap-16  font-[family-name:var(--font-geist-sans)]">
      
      <div className="z-20 w-full lg:px-5 top-0">
        <Navbar/>
        
      </div>
      <div className="w-full py-4 pt-8 lg:p-4">
      <HeroSection />
      <div className="py-14 flex justify-center">
      <Quotes />
      </div>
      
      <div id="about">
      <About />
      </div>
      
      

      <div id="skills">
      <SkillMain/>
      </div>
      
      
      <div id = "projects">
      <Project  />
      </div>
        
      </div>
      <Footer/>
    </div>
  );
}
/**
 * 🚀 If you find this project useful, please ⭐️ it on GitHub and share it!  
 * 🔗 GitHub: https://github.com/kanuj21  
 * 💖 Your support keeps this project growing!  
 */