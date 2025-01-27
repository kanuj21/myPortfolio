// aos.tsx
'use client'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

const useAOS = () => {
  useEffect(() => {
    AOS.init({
      // You can customize AOS options here
      duration: 800, 
      offset: 120, 
      delay: 0, 
      easing: 'ease-in-out', 
    });
  }, []); 
};

export default useAOS;