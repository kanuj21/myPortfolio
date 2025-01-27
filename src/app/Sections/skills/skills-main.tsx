
import SkillsShowcase from "@/app/Sections/skills/skillsbutton"
import { SKILLS_DATA } from "@/app/Data/skills-data"
import { HeaderTitle } from "@/components/myui/header"

export default function SkillMain(){
    return(
        <div className="py-8">
            <div className="flex justify-center w-full">
            <HeaderTitle title="SKILLS" />
            </div>
            
            <SkillsShowcase skills={SKILLS_DATA} />
        </div>
         
    )
}