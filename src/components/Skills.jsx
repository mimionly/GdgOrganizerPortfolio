import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [  
    { name: "Multiple Project Coordination", category: "Industry knowledge" },
    { name: "Program Coordination", category: "Industry knowledge" },
    { name: "Project Coordination", category: "Industry knowledge" },
    { name: "Publicity", category: "Industry knowledge" },
    { name: "Promotional Marketing", category: "Industry knowledge" },
    { name: "Sales Promotion", category: "Industry knowledge" },
    { name: "Social Promotion", category: "Industry knowledge" },
    { name: "Social Media Marketing", category: "Industry knowledge" },
    { name: "Sponsorship", category: "Industry knowledge" },
    { name: "Sponsorship Sales", category: "Industry knowledge" },
    { name: "Sponsorship Management", category: "Industry knowledge" },
    { name: "Product Marketing", category: "Industry knowledge" },
    { name: "Digital Marketing", category: "Industry knowledge" },
    { name: "Marketing", category: "Industry knowledge" },
    { name: "Marketing Strategy", category: "Industry knowledge" },
    { name: "Writing", category: "Interpersonal Skills" },
    { name: "Coordinating Skills", category: "Interpersonal Skills" },
    { name: "English", category: "Languages" },
];

const categories = ["All", "Interpersonal Skills", "Industry knowledge", "Languages"];
const INITIAL_DISPLAY_COUNT = 5;

export const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);

    // Filter skills based on active category
    const filteredSkills = activeCategory === "All" 
        ? skills 
        : skills.filter(skill => skill.category === activeCategory);

    // Get skills to display (limited by displayCount)
    const displayedSkills = filteredSkills.slice(0, displayCount);
    
    // Check if there are more skills to load
    const hasMoreSkills = displayCount < filteredSkills.length;

    // Handle category change - reset display count
    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setDisplayCount(INITIAL_DISPLAY_COUNT);
    };

    // Load more skills
    const handleLoadMore = () => {
        setDisplayCount(prev => prev + INITIAL_DISPLAY_COUNT);
    };

    return (
        <section 
            id="skills" 
            className="animate-fade-in-delay-1 py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
             
                {/* Category Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={cn(
                                "px-3 md:py-2 md:px-6 rounded-full text-xs md:text-sm transition-all duration-300",
                                activeCategory === category
                                    ? "bg-primary text-white shadow-lg"
                                    : "bg-card hover:bg-primary/10 text-muted-foreground hover:text-primary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedSkills.map((skill, index) => (
                        <div 
                            key={index} 
                            className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                                <span className="text-xs md:text-sm text-primary font-medium capitalize px-2 py-1 bg-primary/10 rounded">
                                    {skill.category}
                                </span>
                            </div>                         
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {hasMoreSkills && (
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={handleLoadMore}
                            className="px-8 py-3 bg-primary text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1"
                        >
                            Load More ({filteredSkills.length - displayCount} remaining)
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};