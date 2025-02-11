'use client'

import React from 'react';
import Typed from 'typed.js';

export function Typer() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i style="color:mycolor font-size: 20px;">Web Developer</i>.', 
                '<i>Software Engineer </i>.','<i>Freelancer</i>.'],
      typeSpeed: 70,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}

/**
 * 🚀 If you find this project useful, please ⭐️ it on GitHub and share it!  
 * 🔗 GitHub: https://github.com/kanuj21  
 * 💖 Your support keeps this project growing!  
 */