import { Github,
    Instagram,
    Linkedin, 
    Mail,
    MapPin,
    Send,
    PhoneCall,
    Twitter } from "lucide-react";
import { cn } from '../lib/utils';
import {useToast} from "../hooks/use-toast";

import { useState } from "react";        
export const Contact =() => {
    const { toast } = useToast();
    const [isSubmitting , setIsSubmitting] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            toast({
                title : "Message Sent !",
                description : "Thank Your For Your Message . i'll get back to you soon.",
                
            });
            setIsSubmitting(false);
        }, 1500);
    };
    return ( 
    <section
    id ="contact" 
    className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Get In
        <span className="text-primary "> Touch 
        </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            have a project in mind or just want to say hi? my inbox is always open.
            i'll try my best to get back to you!
        </p>
        <div className="grid  lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-12 ">
            <div className=" space-y-8">
        <h3 className="text-xl font-semibold mb-6 ">Contact Information</h3>
        <div className="space-y-6 justify-center">
            <div className="flex items-start space-x-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                < Mail className="h-6 w-6 text-primary  " />{""}
                </div>
                <div>
                    <h2 className="font-medium ">
                        Email
                    <a
                        href="mailto:hello@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-300 ml-2 "
                    >
                        hello@gmail.com
                    </a>
                </h2>
            </div>
        </div>
        <div className="flex items-start space-x-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                <PhoneCall className="h-6 w-6 text-primary "/>{" "}
                </div>
                    <p className="font-medium ">
                       Phone
                        <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors duration-300 ml-2 ">
                        +1 (234) 567-890
                        </a>
                    </p>
                </div>
            </div>
            <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary  " /> {""}
                </div>
            <div>
                    <h2 className="font-medium "></h2>
                        Location
                         <a className="text-muted-foreground hover:text-primary transition-colors">
                            Hemmadi , Kundapur
                  </a>
                </div>   
            </div>
        </div> 
                <div className="pt-8 ">
                    <h2 className="font-medium mb-4 "> Connect with me </h2>
                    <div className="flex space-x-4 justify-center">
                    <a
                     href="https://www.linkedin.com/in/ashley-rose-2003"
                     target="_blank" >
                     <Linkedin className="h-6 w-6 text-primary  " /></a>
                     <a 
                    href="https://www.instagram.com/ashley_rose_2003" target="_blank"> 
                    <Instagram className="h-6 w-6 text-primary  " />
                    </a>
                    <a
                    href="https://github.com/ashley_rose_2003" target="_blank"> 
                    <Github 
                    className="h-6 w-6 text-primary "/>
                    </a>
                    <a 
                    href="https://twitter.com/ashley_rose_2003"
                    target="_blank"> 
                    <Twitter 
                    className="h-6 w-6 text-primary "/>
                    </a>
                    </div>
                </div> 
            </div>

        <div
        className="bg-card p-8 rounded-lg shadow-xs"
        onSubmit={ handleSubmit}
        >
            <h3 className="text-2xl font-semibold mb-6 "> Send a Message </h3>

            <form className="space-y-6">
                <div>
                <label
                htmlFor="name"
                className="block text-xs font-medium mb-2 "
                >
                    {" "}
                    Your Name
                </label>
                <input 
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-md border border-input  bg-background focus:outline-hidden focus:right-primary"
                placeholder="ashley pinto"
                />
                </div>
                <div >
                    <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 "
                    >
                        {" "}
                        Your email
                        </label>
                        <input 
                        type="email"
                        id="email"
                        name="name"
                        required
                        className="w-full px-4 py-2 rounded-md border border-inpu bg-background focus:outline-hidden focus:ring-2 "
                        placeholder="minoradias@gmail.com"
                        />
                        </div>
                        <div >
                            <label
                                htmlFor="Message"
                                className="block text-sm font-medium mb-2 "
                                >
                                    {""}
                                    Your Message 
                                    </label>
                            <textarea 
                            id="Message"
                            name="Message"
                            required 
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary resize-none "
                            placeholder="hello, i'd like to talk about ..
                            "
                            />

           <button 
           type="submit"
           disabled ={isSubmitting}
           className={cn("cosmic-button w-full flex-items-center justify-center gap-2"
           )}
           >
            {isSubmitting ? "sending ..." : "send Message"}
            <Send size ={16} />
            </button>
            </div>
            </form>
            </div>
            </div>
            </section>
    );
};