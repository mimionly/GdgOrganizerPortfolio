import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

/*  selectors that match your sections */
const navItems = ['#home', '#about', '#skills', '#project', '#contact'];

export const Nav = () => {
 // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentId, setCurrentId] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const[isVisible , setIsVisible]= useState(true);
  const[lastScrollY , setLastScrollY] = useState(0);

  /*scroll handler */
  useEffect(() => { 
      const handleScroll = () => {
      const scrollTop = window.scrollY;
      
      //shadow control
        setIsScrolled(scrollTop >10);

      //   hide/show navbar
      setIsVisible(scrollTop < lastScrollY || scrollTop<50 );
      setLastScrollY(scrollTop);

      //progress bar 
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
        if(docHeight >0){
      setScrollProgress((scrollTop/docHeight) *100);
        }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

/* Active Section Observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting) {
            setCurrentId(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin :'-50% 0px -50px 0px', 
      }
    );
  navItems.forEach((id) => {
    const el = document.querySelector(id);
    if(el) 
      observer.observe(el);
  });
  return() => observer.disconnect();
},[]);
  
  return (
    <nav
  className={cn(
    'fixed w-full z-20 top-0 left-0 transition-all duration-300 backdrop-blur-md',
    'bg-white/20 dark:bg-black/40',
    isScrolled && 'shadow-sm dark:shadow-white/10',
    isVisible ? 'translate-y-0' : '-translate-y-full'
  )}
>

    {/*h-[2px] =16px*/}
    {/*scroll progress bar */}
    <div className="absolute top-0 left-0 h-0.5  w-full bg-transparent">
        <div
          className="h-full bg-primary "
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className=" flex items-center justify-between px-4 py-3">
      
        {/*  mobile section indicator – actually renders the id */}
        <span
        className={cn(
    'md:hidden text-xs uppercase tracking-widest transition-opacity duration-300',
    currentId ? 'opacity-100' : 'opacity-0'
  )}
>
  {currentId.replace('#', '')}
</span>
        {/* desktop nav */}
        <div className="hidden md:flex gap-8">
          {navItems.map((href) => (
            <a
              key={href}
              href={href}
              className ={cn(
            'transition-colors duration-300 capitalize', currentId === href ? 'text-primary font-semibold ':'text-gray-100 dark:text-gray-100 hover:text-primary'
            )}
          >
              {href.replace('#', '')} {/* tidy label */}
            </a>
          ))}
        </div>
      </div>
      </nav>
  );
};