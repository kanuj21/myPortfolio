

  import { SkillsShowcaseProps } from "@/app/Sections/skills/skillsbutton";

  
  // Front End Framework
  import React_SVG from "@/app/Icons/React.svg";
  import TailwindSVG from "@/app/Icons/TailwindCSS.svg";
  import BootStrapSVG from "@/app/Icons/Bootstrap.svg";
  import NextSVG from "@/app/Icons/Nextjs.svg"
  import MuiSVG from "@/app/Icons/MaterialUI.svg";

  //Backend Framework
  import SpringSVG from "@/app/Icons/Spring.svg";
  import LaravelSVG from "@/app/Icons/Laravel.svg"

  //Web Tech
  import HtmlSVG from "@/app/Icons/HTML5.svg";
  import CssSVG from "@/app/Icons/CSS3.svg";
  import JavascriptSVG from "@/app/Icons/JavaScript.svg";
  import TypescriptSVG from "@/app/Icons/TypeScript.svg";
  
  //Tools
  import GitSVG from "@/app/Icons/Git.svg"
  import VSCodeSVG from "@/app/Icons/VSCode.svg"
  import InteliJSVG from "@/app/Icons/IntelliJIDEA.svg"
  import LinuxSVG from "@/app/Icons/Linux.svg"
  import PostmanSVG from "@/app/Icons/Postman.svg"

  
  // Language
  import JavaSVG from "@/app/Icons/Java.svg";
  import CPlusSVG from "@/app/Icons/CPlusPlus.svg";
  import PhpSVG from "@/app/Icons/PHP.svg";
  
 
  
  
  // Database and ORMS
  import SqlSVG from "@/app/Icons/MySQL.svg";
  import PostgresSVG from "@/app/Icons/PostgresSQL.svg";
  import HibernateSvg from "@/app/Icons/Hibernate.svg"
 
  
  export const SKILLS_DATA : SkillsShowcaseProps["skills"] = [
    {
      sectionName: "Web Tech",
      
      skills: [
        {
          name: "HTML",
          icon: HtmlSVG,
         },
        {
          name: "CSS",
          icon: CssSVG,
        },
        
        {
          name: "Javascript",
          icon: JavascriptSVG,
        },
        {
          name: "Typescript",
          icon: TypescriptSVG,
        },
        {
          name : "BootStrap",
          icon : BootStrapSVG,
        },
      ],
    },
    {
      sectionName: "Libraries and Frameworks",
      skills: [
        {
          name: "Reactjs",
          icon: React_SVG,
        },
        {
          name: "Nextjs",
          icon: NextSVG,
        },
        
        {
          name: "Tailwindcss",
          icon: TailwindSVG,
        },
        {
          name: "MUI",
          icon: MuiSVG,
        },
      ],
    },

    {
      sectionName: "Backend",
      skills: [
        {
          name: "Spring",
          icon: SpringSVG,
        },
        {
          name: "Laravel",
          icon: LaravelSVG,
        },
        
      ],
    },

    {
      sectionName : "Language",
      skills : [
        {
          name: "Java",
          icon : JavaSVG,
        },
        {
          name: "C++",
          icon: CPlusSVG,
        },
        {
          name: "PHP",
          icon: PhpSVG,
        }
      ],
    },


    {
      sectionName: "Databases and ORMs",
      skills: [
        {
          name: "Postgress",
          icon: PostgresSVG,
        },
        {
          name: "MySQL",
          icon: SqlSVG,
        },
        {
          name : "Hibernate",
          icon : HibernateSvg,
        },
      ],
    },
    {
      sectionName: "Tools and Technologies",
      skills: [
        {
          name: "Git",
          icon: GitSVG,
        },
        {
          name : "VS Code",
          icon : VSCodeSVG,
        },
        {
          name : "InteliJ Idea",
          icon : InteliJSVG
        },
        {
          name : "Linux",
          icon : LinuxSVG,
        },
        {
          name: "Postman",
          icon: PostmanSVG,
        },
      ],
    },
    
  ];

   export default SKILLS_DATA;
  
  