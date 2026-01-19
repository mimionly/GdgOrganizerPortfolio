
export const Hero = () => {
    return (
        <section 
        id ="home" 
        className="relative min-h-screen flex items-start md:items-center justify-center px-4 pt-12 md:pt-0"
>
        <div className ="container max-w-4xl mx-auto text-center z-0 ">
       {/* main wrapper*/}
       <div className="flex flex-col md:flex-row items-center gap-8">
        {/* left image */}
        <div className="w-full md:w-1/2 flex justify-center mt-0 md:mt-0">
        <img 
        src="/Projects/ashley.jpeg" 
        alt="Ashley Pinto"
        className="w-36 h-36 md:w-60 md:h-60  mx-auto object-center  object-cover rounded-full "/>
        </div>
        {/*right / Bottom text*/}
        <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className ="text-3xl md:text-xl sm:text-xl font-bold tracking-tight   leading-tight ">

            <span className ="opacity-0 animate-fade-in lg:text-4xl"> Hi, I'm </span>
            <span className =" opacity-0 animate-fade-in-delay-1 text-primary py-4 lg:text-4xl">  Ashley </span>
            <span className ="text-gradient opacity-0 animate-fade-in-delay-1 text-gradient ml lg:text-4xl">  Pinto </span>
        </h1>
        
        <p className ="text-center  md:text-left md:text-xl text-lg max-x-xl sm:text-xs mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3 leading-relaxed">I am a self-motivated individual with strong leadership skills and hands-on
        experience in organizing successful events and programs. I adapt quickly to
        challenging situations and thrive in dynamic environments.
        <br />
        <span className="block mt-4">
        With excellent written and verbal communication skills, confidence in public
        speaking, and effective team management abilities, I am also a keen observer
        and listener—allowing me to understand situations deeply and respond
        thoughtfully.
        </span>
        </p>
       </div> 
      </div>
     </div>
</section> 
);
};
