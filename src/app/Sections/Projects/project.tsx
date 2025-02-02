import React from 'react'

import { ProjectData } from '@/app/Data/projectsData'
import { type Project,  type TechButton} from '@/app/Data/projectsData'
import { FaGithub, FaEye } from 'react-icons/fa';
import { HeaderTitle } from "@/components/myui/header"

const ProjectButton: React.FC<TechButton> = ({ name, color }) => {
  
  return (
    
        <button 
        className={`px-1 py-[.1rem] text-xs rounded-md text-white ${color}`} 
        >
        {name}
        </button>
   
    
  );
};

export default function Project() {

  const projects: Project[] = ProjectData;
  return (
    <div className='pt-8'>
      <div className='flex w-full justify-center'>
      <HeaderTitle title="I've Built" />
      </div>
      
      <div className='grid  lg:px-5 px-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-flow-row gap-8 justify-center items-start'>
      
      {projects.map((project, index) => (
        <div data-aos="zoom-in-up" key={index} className='w-full shadow-lg hover:inset-6 rounded-md dark:bg-[#171918] md:min-h-[540px]'>
        
        <figure >
        <div className='flex'>
          <img className='h-64 w-full lg:grayscale duration-500 hover:grayscale-0 hover:scale-105' src={project.image} alt="img" />

          <div className='absolute top-40 left-0 right-0 p-4 bg-[#171918]/90 flex justify-center items-center opacity-100 lg:opacity-0 lg:hover:opacity-100 transition-all duration-300'>
            <a href={project.git} target="_blank" rel="noopener noreferrer" className="mr-4">
              <FaGithub className="text-white text-xl" />
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="ml-4">
              <FaEye className="text-white text-xl" />
            </a>
          </div>
          </div>
        </figure>

        
        <figcaption className='py-4 md:px-4 '>
          <h1 className='text-mycolor text-xl'>{project.title}</h1>
          <p className='text-justify'>{project.description}</p>
        </figcaption>
        <div className='p-2 flex flex-wrap gap-3'>
          {project.techs.map((button, index) => (
            <div className=''>
            <ProjectButton key={index} {...button} />
          </div>
          ))}
        
        </div>

      </div>
      ))}
      
      
    </div>
    </div>
    
  )
}

