
import Image from "next/image";
// import { FC, SVGProps } from "react";

export type SkillPillProps = {
  name: string;
  icon: string;
};

export default function SkillPill(props: SkillPillProps) {
  const { name, icon } = props;
  
  return (
    <div className="flex w-max items-center gap-2 overflow-hidden rounded-lg border border-accent/20 bg-white px-4 py-3 text-sm shadow-sm dark:bg-zinc-700 sm:text-base md:px-6 md:py-3 md:text-lg">
      <Image 
      src={icon}
      width={25}
      height={25}
      alt="icon"
       />
      {/* <Icon className="h-5 w-5 sm:h-8 sm:w-8" /> */}
      <span className="font-medium">{name}</span>
    </div>
  );
}

/**
 * 🚀 If you find this project useful, please ⭐️ it on GitHub and share it!  
 * 🔗 GitHub: https://github.com/kanuj21  
 * 💖 Your support keeps this project growing!  
 */