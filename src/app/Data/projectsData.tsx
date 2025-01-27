
export interface TechButton{
    name: string,
    color: string,
}
export interface Project{
    image: string,
    title: string,
    description : string,
    git ?: string,
    demo ?: string,
    techs: TechButton[],

}

export const ProjectData:Project[] = [
    {
        image: "./img/UserApp.png",
        title : "User Management App",
        git : "https://github.com/kanuj21/UserManagement",
        demo: "#",
        description: "Developed a User Management System using React.js for the front end and SpringBoot  for the back end. The system allows an admin to add, edit,  and delete user. Integrated PostgreSQL for database management andwrote secure, efficient APIs using Spring Boot to handle CRUD operations.",
        techs:[
            { name: "Java", color: "bg-red-400" },
            // { name: "Python", color: "bg-blue-900" },
            {name: "JavaScript", color:"bg-yellow-500"},
            {name: "HTML", color:"bg-gray-300"},
            { name: "Spring", color: "bg-green-800" },
            // { name: "Python", color: "bg-green-400" },
            // {name: "Typecript", color:"bg-sky-800"},
            {name: "CSS", color:"bg-red-800"},
        ],

    },

    {
        image: "./img/SuperHero.png", // Replace with the actual image path
        title: "Superhero App",
        description: "A web application that fetches and displays information about superheroes using the Superhero API. Users can search for their favorite heroes and view their powers, biography, and images.",
        git: "https://github.com/kanuj21/Super-Hero-API", // Replace with your actual GitHub repository URL
        demo: "https://kanuj21.github.io/Super-Hero-API/", // Replace with the URL of your deployed app
        techs: [
          { name: "HTML", color:"bg-gray-300" },
          { name: "CSS", color:"bg-red-800" },
          { name: "JavaScript", color:"bg-yellow-500" },
          { name: "Superhero API", color: "#000" }, // You can customize the color
        ],
      },

      {
        image: "./img/Portfolio.png", // Replace with the actual image path
        title: "Personal Portfolio Website",
        description: "A modern and interactive portfolio website built with Next.js, Framer Motion, Tailwind CSS, TypeScript, and Shadcn UI. Showcases my skills and projects in a visually appealing and engaging manner.",
        git: "https://github.com/your-username/portfolio-website", // Replace with your actual GitHub repository URL
        demo: "https://your-portfolio-website-url.com", // Replace with the URL of your deployed portfolio
        techs: [
          { name: "Next.js", color: "bg-zinc-600" }, // Black for Next.js
          { name: "Framer Motion", color: "bg-orange-700" }, // Orange for Framer Motion
          { name: "Tailwind CSS", color: "bg-blue-500" }, // Blue for Tailwind CSS
          { name: "TypeScript", color: "bg-sky-800" }, // Blue for TypeScript
          { name: "Shadcn UI", color: "bg-stone-700" }, // Black for Shadcn UI
          { name: "HTML", color:"bg-gray-300" },
          { name: "CSS", color:"bg-red-800" },
          { name: "JavaScript", color:"bg-yellow-500" },
        ],
      }
]