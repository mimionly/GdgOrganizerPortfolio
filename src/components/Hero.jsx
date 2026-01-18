import { ArrowDown } from "lucide-react";
export const Hero = () => {
    return (
        <section 
        id ="hero" 
        className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className ="container max-w-4xl mx-auto text-center z-10 ">
       
        <h1 className ="text-3xl md:text-6xl sm:text-xl font-bold tracking-tight py-4  leading-tightext-center">
            <span className ="opacity-0 animate-fade-in"> Hi, I'm </span>
            <span className =" opacity-0 animate-fade-in-delay-1 text-primary">  Ashley </span>
            <span className ="text-gradient opacity-0 animate-fade-in-delay-1 text-gradient ml ">  Pinto </span>
        </h1>
        <p className ="text-lg md:text-xl text-muted-foreground max-2-2xl sm:text-xs mx-auto opacity-0 animate-fade-in-delay-3 ">I am a self-motivated person and a good team leader; I have organized various successful events and programs and I am adaptable to all challenging situations.
        Excellent written and verbal communication skills, confidence, and proficiency in public speaking and team management, I am also a keen observer and good listener which aids in my ability to understand a situation and to prepare an appropriate response.
        </p>
        <div className =" opacity-0 animate-fade-in-delay-4 pt-7">
            <a href="#projects" className="consmic-button"> Leadership in Action

            </a>
        </div>
    </div>
  
   <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
   <span className="text-sm sm:text-xs text-muted-foreground mb-2"> Scroll</span>
        <ArrowDown className ="h-5 w-5 text-primary"/>

   </div>
</section> 
);
};
