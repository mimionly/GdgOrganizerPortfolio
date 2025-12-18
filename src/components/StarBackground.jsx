import { useEffect, useState } from "react";
 //useEffect-> runs the code after the component loads
 //useState-> store data that can change  (stars & meteors)

export const StarBackground = () => {
//react function component ,it will render an animated star and merteor background
  const [stars, setStars] = useState([]); 
  //stars → array holding star objects
  const [meteors, setMeteors] = useState([]);
 // meteors → array holding meteor objects
 //setStars() and setMeteors() -> updat the arrays 

  useEffect(() => {
    //rns when the componenet loads 
    generateStars();
    generateMeteors();
//creates stars and meteors when page loads 
    const handleResize = () => {
      generateStars();
      //if screen changes -> regenerate stars 
    };

    window.addEventListener("resize", handleResize);
//Calls handleResize whenever window size changes
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  ///Empty array → useEffect runs only once

  const generateStars = () => {
    //function to create random stars 
    const numberOfStars = Math.floor/* floor removes decimals */(
      (window.innerWidth * window.innerHeight) /1000
      //more screen area-> more stars 
    );

    const newStars = [];
    //stores stars objects 

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i, //unique key 
        size: Math.random() * 2 + 1, //1px to 3px
        x: Math.random() * 100, //random position
        y: Math.random() * 100,//random position 
        opacity: Math.random() * 0.5 + 0.5, //0.5 to 1
        animationDuration: Math.random() * 4 + 2, //2s to 6s
      });
    }

    setStars(newStars);
    //saves stars tto state -> react re-renders
  };

  const generateMeteors = () => {
    //create shooting stars
    const numberOfMeteors = 15;
    //always 4 meteors 
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i, //width
        size: Math.random() *1 + 1 , //later multiplies
        x: Math.random() * 100, //sarting position
        y: Math.random() * 20, //starting position
        delay: Math.random() * 15, //random animation start
        animationDuration: Math.random() * 3 + 3, //3-6
      });
    }

    setMeteors(newMeteors);
    //updated state 
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
  
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
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
          className="meteor animate-meteor"
          style={{
            width: meteor.size  + "px",
            height: meteor.size * 4 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};