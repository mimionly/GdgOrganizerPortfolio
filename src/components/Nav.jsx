import {cn} from '@/lib/utils';
import { useEffect, useState } from 'react';
import { LayoutGrid, ChevronDown } from "lucide-react";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#project"},
    {name: "Contact", href: "#contact"},
];

export const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true); // Nav visibility
    const [lastScrollY, setLastScrollY] = useState(0);

    // Handle scroll to show/hide navbar
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Update isScrolled state (for styling)
            setIsScrolled(currentScrollY > 10);

            // Hide navbar when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down & past 100px
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav 
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-2",
                // Hide navbar by translating it up
                isVisible ? "translate-y-0" : "-translate-y-full"
            )}
        >
            <div className="container flex items-center justify-between">
                <img src="/src/assets/logo1.png" className='w-12 h-12'/>

                {/* Desktop nav */}
                <div className="hidden md:flex gap-8">
                    {navItems.map((item, key) => (
                        <a 
                            key={key} 
                            href={item.href} 
                            className='text-foreground/80 hover:text-primary transition-colors duration-300'
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile nav toggle button */}
                <button 
                    onClick={() => setIsMenuOpen((prev) => !prev)} 
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <ChevronDown size={24} /> : <LayoutGrid size={24} />}
                </button>

                {/* Mobile menu */}
                <div className={cn(
                    "fixed inset-0 bg-background/100 backdrop-opacity-0 flex flex-col items-end pt-2 justify-start hover:text-foreground/80",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                    <div className="font-semibold text-white mt-18 flex flex-col justify-between text-xl">
                        {navItems.map((item, key) => (
                            <a 
                                key={key} 
                                href={item.href} 
                                className='text-foreground/80 hover:text-primary transition-colors duration-300' 
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Image at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0">
                        <div className="relative">
                            <div className="absolute top-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                                <p className="text-white text-center text-lg font-semibold">Explore More</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};