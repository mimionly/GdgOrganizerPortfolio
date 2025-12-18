import { Moon, Sun } from "lucide-react";
//icons from lucide
import { useEffect, useState } from "react";
//stores the current theme (dark/light)
//runs the code whe the component loads
import { cn } from "@/lib/utils";
//utility to combine class names cleanly (common in Tailwind projects)

export const ThemeToggle = () => {
  const [isDarkMode , setIsDarkMode] =useState(false);
//dark mode ON
//default is false (light mode)

  useEffect(() /* runs only when the page loads */=> {
    const storedTheme = localStorage.getItem("theme");//reads theme from the browser localStorage
    //checks if the saved theme is "dark"
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);
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
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};