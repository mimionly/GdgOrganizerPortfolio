import { Moon, Sun } from "lucide-react";
//icons from lucide
import { useEffect, useState } from "react";
//stores the current theme (dark/light)
//runs the code whe the component loads
import { cn } from "@/lib/utils";
//utility to combine class names cleanly (common in Tailwind projects)

export const ThemeToggle = () => {
  const [isDarkMode , setIsDarkMode] =useState(()=>
    localStorage.getItem("theme") ==="dark"
  );
//dark mode ON
//default is false (light mode)

useEffect(()=> {
  if(isDarkMode){
    document.documentElement.classList.add("dark");
    //Enables dark mode
    localStorage.setItem("theme" ,"dark");
    //Saves "dark" in localStorage
  }else{
    document.documentElement.classList.remove("dark");
    //Removes dark styles
    localStorage.setItem("theme", "light");
    //Saves "light" in localStorage
  }
  },[isDarkMode]);
  //[] at the end means run only once when component mounts

  const toggleTheme = () => {
  if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      //Removes dark styles
      localStorage.setItem("theme", "light");
      //Saves "light" in localStorage
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      //Enables dark mode
      localStorage.setItem("theme", "dark");
      //Saves "dark" in localStorage
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed  top-0 right-0 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-none"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-400" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};