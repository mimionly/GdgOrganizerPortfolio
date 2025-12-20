import { Briefcase, Code , User } from "lucide-react";
import React from "react";
export const About =()=>{
    return ( 
        <section id ="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl ">
                <h2 className="text-3xl font-bold text-center md:text-4xl mb-12">
                    About 
                    <span className="text-primary "> ? </span>
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start p-4 ">
<div className="space-y-6 ">
    <h3  className="text-2xl font-semibold"> Passionate web developer & Tech Creator</h3>
    <p className="text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, quis. At debitis iste cupiditate. Maxime autem aut optio, doloremque hic ad neque omnis tempora ea facilis itaque repellat eum perspiciatis.
    </p>
     <p className ="text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ullam necessitatibus temporibus non ipsa repellendus, dolores officia quod, esse tempore eius modi enim. Perferendis eum sequi quaerat, inventore quos veniam!
    </p>
    <div className=" flex flex-col sm:flex-row gap-4 pt-4">
        <a href="#contact" className="cosmic-button " >Contact Me</a>

        <a href="" className=" px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-colors duration-300" >Download CV </a>
    </div>
    </div>
   
    <div className="grid grid-cols-1 gap-6  ">
        <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
                <div className ="p-3 rounded-full bg-primary/10 ">
                <Code className="h-6 w-6 text-primary"/>
                 </div>
                 <div className="text-left ">
                    <h4 className="font-semibold text-lg "> web development </h4>
                    <p className="text-muted-foreground"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquid eos corrupti aliquam, dolor libero nobis laudantium blanditiis culpa ea temporibus nam ducimus porro natus alias dicta aut, vitae odio.</p>
                 </div>
        </div>
        </div>
        <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
                <div className ="p-3 rounded-full bg-primary/10 ">
                <Briefcase className="h-6 w-6 text-primary"/>
            </div>
            <div className="text-left ">
                    <h4 className="font-semibold text-lg "> web development </h4>
                    <p className="text-muted-foreground"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquid eos corrupti aliquam, dolor libero nobis laudantium blanditiis culpa ea temporibus nam ducimus porro natus alias dicta aut, vitae odio.</p>
                 </div>
        </div>
        </div>
        <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
                <div className ="p-3 rounded-full bg-primary/10 ">
                <User className="h-6 w-6 text-primary"/>
            </div>
            <div className="text-left ">
                    <h4 className="font-semibold text-lg "> web development </h4>
                    <p className="text-muted-foreground"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquid eos corrupti aliquam, dolor libero nobis laudantium blanditiis culpa ea temporibus nam ducimus porro natus alias dicta aut, vitae odio.</p>
                 </div>
           </div>
        </div>
    </div>
</div>
</div>

</section>
    );
};