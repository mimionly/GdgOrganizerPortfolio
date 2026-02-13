import React from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Management } from '../components/Management';
import { Contact } from "../components/Contacts";

export const Home =() => {
    return (
    <div  className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle/>
        <StarBackground />
        <Nav />
        <main>
          <Hero/>
          <About/>
          <Skills />
          <Management />
          <Contact />
         
        </main>
    </div>

      



    );
};