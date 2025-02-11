'use client'

import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode} from 'react-icons/si';
import { FaSquareXTwitter, FaGoogle } from 'react-icons/fa6';
import Link from 'next/link';
import useAOS from '@/components/animation/aos';

interface IconProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  size: number;
  color: string;
  className?: string;
  title?: string;
  href: string;
}

const socialIcons: IconProps[] = [
  { icon: FaGithub, size: 32, color: "#70B8FF", className: "hover:text-slate-600", title: "GitHub", href:"https://github.com/kanuj21"},
  { icon: FaLinkedin, size: 32, color: "#70B8FF", className: "hover:text-slate-600", title: "LinkedIn", href: "https://www.linkedin.com/in/ambuj-vats-649a7b11b/"},
  { icon: SiLeetcode, size: 32, color: "#70B8FF", className: "hover:text-slate-600", title: "LeetCode", href: "https://leetcode.com/u/Amb_code/"},
  { icon: FaSquareXTwitter, size: 32, color: "#70B8FF", className: "hover:text-slate-600", title: "Twitter",href: "https://x.com/ambuj8848" },
  { icon: FaGoogle, size: 32, color: "#70B8FF", className: "hover:text-slate-600", title: "GFG",href: "https://www.geeksforgeeks.org/user/kanuj2151/" },
];



export default function Footer() {
  useAOS();

  return (
    <div className="flex flex-col w-full bg-slate-800 dark:opacity-50 justify-center items-center">
      <div data-aos="zoom-in" className="py-16 flex flex-col gap-5 justify-center items-center">
        <h1 className="text-blue-700 lg:text-4xl text-xl font-light">
          I am Open to Work <span className="text-green-700 opacity-80">In Current</span>
        </h1>

        <div className='flex flex-row gap-5 justify-center items-center'>
        {socialIcons.map((icon, index) => (
          <Link key={index} href={icon.href} target="_blank" rel="noopener noreferrer"> 
              <span>
                <icon.icon 
                  style={{ 
                    width: `${icon.size}px`, 
                    height: `${icon.size}px`, 
                    color: icon.color 
                  }} 
                  className={icon.className} 
                  
                />
              </span>
            </Link>
          ))}
        

        </div>
        
        <div className='flex justify-center items-center'>
          <a href="mailto:tomail.ambuj@gmail.com" className='text-xl text-orange-600'>
          tomail.ambuj@gmail.com
          </a>
        </div>
        <div className='flex justify-center flex-col'>
        <p className='text-slate-400 text-sm'>Crafting Scalable Solutions with Passion & Code.
        </p>
          <p className='text-slate-400 text-sm flex justify-center'>
          &#169;2025 built by @ambuj.</p>
          
        </div>
      </div>
    </div>
  );
}

/**
 * 🚀 If you find this project useful, please ⭐️ it on GitHub and share it!  
 * 🔗 GitHub: https://github.com/kanuj21  
 * 💖 Your support keeps this project growing!  
 */