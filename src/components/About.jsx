import { Briefcase, Code, User } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            
            <h3 className="text-2xl md:text-2xl  mb-12 text-center font-semibold">
              GDG On Campus SJEC
            <span className="text-primary"> Organizer </span>
            </h3>
            

            <p className="text-muted-foreground">
              A Google Developers Organizer is a passionate community leader who plays a vital role in building and nurturing local developer ecosystems. They organize technical events such as meetups, workshops, hackathons, and study jams to help developers learn Google technologies and stay updated with the latest trends in software development.
            </p>

            <p className="text-muted-foreground">
              By bringing together students, professionals, and industry experts, a Google Developers Organizer fosters collaboration, knowledge sharing, and innovation within the community. They act as a bridge between Google and local developers, creating an inclusive environment that encourages learning, networking, and real-world problem solving.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Organizer</h4>
                  <p className="text-muted-foreground">
                    GDG On Campus SJEC
                  </p>
                  <p className="text-muted-foreground">
                    Aug 2025 - Ongoing
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Events Lead</h4>
                  <p className="text-muted-foreground">
                    GDG On Campus SJEC
                  </p>
                  <p className="text-muted-foreground">
                    Sep 2024 - Aug 2025 
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Event Coordinater</h4>
                  <p className="text-muted-foreground">
                    Tiara SJEC
                    
                  </p>
                  <p className="text-muted-foreground">
                   Mar 2025 - Apr 2025                    
                  </p>                
                </div>
                
                
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Lead Organizer</h4>
                  <p className="text-muted-foreground">
                    HackToFuture
                  </p>
                  <p className="text-muted-foreground">
                   Jan 2025 - Apr 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};