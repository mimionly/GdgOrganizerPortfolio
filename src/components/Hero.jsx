
export const Hero = () => {
    return (
        <section 
        id ="home" 
        className="relative min-h-screen flex items-start md:items-center justify-center px-4 pt-12 md:pt-0"
>
        <div className ="container max-w-6xl mx-auto  z-0 ">
       {/* main wrapper*/}
       <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* left image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start ">
        <div className="relative group">
        <img 
        src="/Projects/ashley.jpeg" 
        alt="Ashley Pinto"
        className="w-36 h-36 lg:w-72 lg:h-72  md:w-60 md:h-60 object-cover rounded-full shadow-lg ring-5 ring-primary/30 transition-transform duration-300 group-hover:scaole-105 "/>
        </div>
        </div>




        {/*right / Bottom text*/}
       <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
  <h1 className="text-xl md:text-2xl lg:text-5xl font-bold tracking-tight leading-tight">
    <span className="opacity-0 animate-fade-in text-center ">Hi, I'm </span>
    <span className="opacity-0 animate-fade-in-delay-1 text-primary text-center">Ashley </span>
    <span className="text-gradient opacity-0 animate-fade-in-delay-1 text-center">Pinto</span>
  </h1>
  
  <p className="max-w-2xl mt-6 text-base  md:text-lg lg:text-xl opacity-0 animate-fade-in-delay-3">
    I am a self-motivated individual with strong leadership skills and hands-on
    experience in organizing successful events and programs. I adapt quickly to
    challenging situations and thrive in dynamic environments.
  </p>

  <p className="max-w-2xl mt-4 text-base  md:text-lg lg:text-xl opacity-0 animate-fade-in-delay-4">
    With excellent written and verbal communication skills, confidence in public
    speaking, and effective team management abilities, I am a keen observer and
    listener—allowing me to understand situations deeply and respond thoughtfully.
  </p>
</div>
    </div>
    </div>
</section> 
);
};
