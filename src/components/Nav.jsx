import {cn} from '@/lib/utils';
import { useEffect } from 'react';
import { useState } from 'react';
import { LayoutGrid, ChevronDown } from "lucide-react";

const navItems =[
    {name :"Home", href :"#hero"},
    {name :"About", href :"#about"},
    {name :"Skills", href :"#skills"},
    {name :"Projects", href :"#projects"},
    {name :"Contact", href :"#contact"},
]

export const Nav = () => {
    const[isScrolled , setIsScrolled] = useState(false) ;
    const[isMenuOpen , setIsMenuOpen] = useState(true) ;

    useEffect(()=> {
        const handleScroll =() => {
            setIsScrolled(window.screeenY >10)
        }

    window.addEventListener("scroll" ,handleScroll);
    return ()=>  window.removeEventListener("scroll" ,handleScroll);
    },[]);
    return <nav className={cn("fixed w-full z-40 transition-all  duration-300",isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs":"py-2",
    )}
    >
        <div className="container flex items-center justify-between" >
            <a className="text-xl font-bold text-primary flex items-center" href="#hero">
               <span className="flex flex-wrap items-center text-foreground ">
                <span className =" text-xs sm:text-sm md:text-xl lg:text-5xl ">GDG On Campus SJEC</span>
             
               <span className ="text-lg sm:text-sm md:text-xl opacity-80 rounded-md bg-foreground/10 hover:bg-foreground/20 transition-colors duration-300 ">
                | LeaderShip Portfolio
               </span>
              </span>
            </a>
             {/*desktop nav */}
             <div className="hidden md:flex gap-8">
                {navItems.map((item, key)=>(
                  <a key ={key} href={item.href} className='text-foreground/80 hover:text-primary transition-colors duration-300'
                  >{item.name}</a>
                ))}
             </div>

             {/* mobile nav*/}
             <button onClick={() => setIsMenuOpen((prev ) => !prev)}  className="md:hidden p-2 text-foreground z-50"
             arial-label={isMenuOpen ? "Close Menu " : "Open Menu"}> {isMenuOpen ? <ChevronDown size ={24} /> :< LayoutGrid size ={24}/>} </button>
             <div className= {cn("fixed inset-0 bg-background/100 backdrop-opacity-0 flex flex-col items-end pt-2 justify-start  hover:text-foreground/80 ",
               "transition-all duration-300 md:hidden",
                isMenuOpen ? 
                "opacity-100 pointer-events-auto" : 
                "opacity-0 pointer-events-none"
             )}>
                 <div className="font-semibold  text-white mt-18 flex flex-col  justify-between text-xl">
                {navItems.map((item, key)=>(
                  <a key ={key} href={item.href} className='text-foreground/80 hover:text-primary transition-colors duration-300' onClick ={() => setIsMenuOpen(false)}
                  >{item.name}
                </a>
                ))}
             </div>

                     {/* Image at Bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            
            {/* Full-screen image container - no glass effect container */}
            {/* Image takes full width and height of bottom section */}
            <div className="relative">
              
              {/* Decorative image - FULL SCREEN */}
              {/* w-full: image takes full width */}
              {/* h-screen: image takes full viewport height */}
              {/* object-cover: crops image to fill entire space while maintaining aspect ratio */}
              {/* NO rounded corners - fills edge to edge */}
              <img
                src="src/assets/ashleyPinto.jpeg"
                alt="Decorative"
                className="w-full h-screen object-cover opacity-30"
              />
              
              {/* Optional: Text overlay on top of image */}
              {/* absolute: positions text over the image */}
              {/* bottom-0: anchors text to bottom of image */}
              {/* inset-x-0: stretches text container full width */}
              {/* bg-gradient-to-t: creates gradient from bottom (dark) to top (transparent) */}
              {/* from-black/60: starts with 60% opacity black at bottom */}
              <div className="absolute top-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white text-center text-lg font-semibold">Explore More</p>
              </div>
            </div>
          </div>
        
            </div>
        </div>
    </nav>
};