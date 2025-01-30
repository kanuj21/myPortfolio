import useAOS from "@/components/animation/aos"

export function AboutME (){
    useAOS()
    return(
        <div data-aos="fade-right" className="flex flex-col min-w-64 w-full lg:p-2 leading-7 text-base">
            <h1 className="text-justify">
            Hello! I'm <span className="text-mycolor">Ambuj Vats</span>, a passionate 
            <span className="text-mycolor"> Full Stack Developer</span>  with a knack 
            for building dynamic and innovative web applications. With a solid foundation
            in Java, Spring Boot, React.js, and a variety of other cutting-edge technologies,
            I thrive on turning complex ideas into seamless digital experiences.

            I believe in the power of learning and innovation. Over the years, 
            I’ve honed my skills through hands-on projects like a 
            <span className="text-mycolor"> User Management System</span> , 
            a versatile Password Generator, and even a Java-based Airline Ticket
            System. These projects reflect my ability to design, develop, and 
            deliver solutions that are both efficient and user-friendly.

            When I’m not coding, you’ll find me exploring new tools and 
            technologies, fueling my curiosity to stay ahead in the ever-evolving 
            tech landscape. As a good observer and a constant learner, I embrace 
            challenges and take pride in contributing to impactful solutions.
            <span className="text-mycolor"> Feel free to explore my work, connect with me, and let’s create 
            something amazing together!
            </span>
            </h1>
        </div>
    )
}