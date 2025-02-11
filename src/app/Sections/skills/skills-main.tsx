
import SkillsShowcase from "@/app/Sections/skills/skillsbutton"
import { SKILLS_DATA } from "@/app/Data/skills-data"
import { HeaderTitle } from "@/components/myui/header"

export default function SkillMain(){
    return(
        <div className="py-8">
            <div className="flex justify-center w-full">
            <HeaderTitle title="Abilities" />
            </div>
            
            <SkillsShowcase skills={SKILLS_DATA} />
        </div>
         
    )
}

/**
 * 🚀 If you find this project useful, please ⭐️ it on GitHub and share it!  
 * 🔗 GitHub: https://github.com/kanuj21  
 * 💖 Your support keeps this project growing!  
 */