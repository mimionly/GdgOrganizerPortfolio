import { Github,
    Instagram,
    Linkedin, 
    Mail,
    MapPin,
    Send,
    PhoneCall,
    Twitter } from "lucide-react";
export const Footer = () => {
const copyright = `© ${new Date().getFullYear()} GDG SJEC. All rights reserved.`;
    return (
<div className="flex items-center justify-between  gap-8  max-w-6xl mx-auto px-4 ">
   {/* left column*/}
    <p class="text-sm  opacity-60" >{copyright}</p>
    {/*Right Column - flex row , no extra grid tracks */}
    <div className="flex items-center gap-2">
                   <a
                    href="https://www.linkedin.com/in/ashley-rose-2003" target="_blank" rel="noopener noreferrer">
                   <Linkedin className="h-4 w-4 text-primary gap-8 " /></a>
                    <a 
                    href="https://www.instagram.com/ashley_rose_2003" target="_blank" rel="noopener noreferrer"> 
                    <Instagram className="h-4 w-4 text-primary"/>
                    </a>
                    <a
                    href="https://github.com/ashley_rose_2003" target="_blank" rel="noopener noreferrer" > 
                    <Github 
                    className="h-4 w-4 text-primary "/>
                    </a>
                    <a 
                    href="https://twitter.com/ashley_rose_2003" target="_blank" rel="noopener noreferrer"
                    > 
                    <Twitter 
                    className="h-4 w-4 text-primary "/>
                    </a>
            </div>
        </div>
    );
    
};