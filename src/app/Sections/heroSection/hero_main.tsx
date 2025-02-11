import { Profile } from "./profilepic"
import { Description } from "./hero_description"


export function HeroSection(){
    return(
        <div>
            
            <div className="w-full grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-20 justify-center items-center ">
                <div className="lg:px-14 px-2 md:col-span-2">
                    <Description />
                </div>
                <div className="md:flex lg:col-span-1 hidden md:pr-4 lg:pr-6">
                <Profile />
                </div>
                
            </div> 
        </div>
    )
}

/**
 * 🚀 If you find this project useful, please ⭐️ it on GitHub and share it!  
 * 🔗 GitHub: https://github.com/kanuj21  
 * 💖 Your support keeps this project growing!  
 */