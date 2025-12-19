import React from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Nav } from "../components/Nav";
export const Home =() => {
    return (
    <div  className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* theme toggle*/}
        <ThemeToggle/>
        {/* Background effects */}
        <StarBackground />
        {/* NavBar */}
        <Nav />
        {/* main content */}




        {/*footer */}
    </div>

      



    );
};