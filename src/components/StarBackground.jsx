import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => 
    localStorage.getItem("theme") === "dark"
  );

  const [stars, setStars] = useState(() => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    return newStars;
  });

  const [meteors] = useState(() => {
    const numberOfMeteors = 5;
    const newMeteors = [];
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 50,
        delay: Math.random() * 5,
        animationDuration: Math.random() * 4 + 1,
      });
    }
    return newMeteors;
  });

  useEffect(() => {
    const handleResize = () => {
      const numberOfStars = Math.floor(
        (window.innerWidth * window.innerHeight) / 10000
      );

      const newStars = [];

      for (let i = 0; i < numberOfStars; i++) {
        newStars.push({
          id: i,
          size: Math.random() * 3 + 1,
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: Math.random() * 0.5 + 0.5,
          animationDuration: Math.random() * 4 + 2,
        });
      }

      setStars(newStars);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Listen for theme changes
  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(localStorage.getItem("theme") === "dark");
    };

    // Check theme on mount
    checkTheme();

    // Listen for storage changes (theme toggle)
    window.addEventListener("storage", checkTheme);
    
    // Also listen for custom theme change event
    const handleThemeChange = () => checkTheme();
    window.addEventListener("themeChange", handleThemeChange);

    return () => {
      window.removeEventListener("storage", checkTheme);
      window.removeEventListener("themeChange", handleThemeChange);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background color that inverts with theme */}
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-black' : 'bg-white'}`} />
      
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star animate-pulse-subtle rounded-full absolute ${
            isDarkMode ? 'bg-white' : 'bg-black'
          }`}
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className={`meteor animate-meteor absolute bg-black rounded-full ${
            isDarkMode ? 'bg-white' : 'bg-black'
          }`}
          style={{
            width: meteor.size * 2 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};