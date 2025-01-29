
import SkillPill, { type SkillPillProps } from "./skills";



export interface SkillsShowcaseProps {
  skills: {
    sectionName: string;
    skills: SkillPillProps[];
  }[];
}

export default function SkillsShowcase({ skills }: SkillsShowcaseProps) {
  
  

  return (
    <div>
      
      <section className="overflow-hidden px-6 sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-7xl">
        
        {skills.map((section) => (
           
            <div className="mt-4" key={section.sectionName}>
              <span className="text-xs font-semibold text-foreground sm:text-sm">
                {section.sectionName}
              </span>
              <div className="mt-2 flex flex-wrap gap-4 text-xl text-accent-foreground">
                {section.skills.map((pill, index) => (
                  
                  <div key={index} data-aos="fade-right">
                    <SkillPill {...pill} />
                  </div>
                    
                  
                ))}
              </div>
            </div>
          
        ))}
      </div>
    </section>
    </div>
    
  );
}