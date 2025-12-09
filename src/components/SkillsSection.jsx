import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "React", level: 50, category: "frontend", icon: "/icons/react.svg" },
  {
    name: "JavaScript",
    level: 50,
    category: "frontend",
    icon: "/icons/javascript.svg",
  },
  {
    name: "TypeScript",
    level: 50,
    category: "frontend",
    icon: "/icons/typescript.svg",
  },
  {
    name: "Tailwind CSS",
    level: 50,
    category: "frontend",
    icon: "/icons/tailwind.svg",
  },
  {
    name: "Next.js",
    level: 50,
    category: "frontend",
    icon: "/icons/nextjs.svg",
  },

  // Backend
  {
    name: "Node.js",
    level: 20,
    category: "backend",
    icon: "/icons/nodejs.svg",
  },
  {
    name: "Express",
    level: 20,
    category: "backend",
    icon: "/icons/express.svg",
  },
  {
    name: "MongoDB",
    level: 20,
    category: "backend",
    icon: "/icons/mongodb.svg",
  },
  {
    name: "Supabase",
    level: 20,
    category: "backend",
    icon: "/icons/supabase.svg",
  },
  {
    name: "GraphQL",
    level: 20,
    category: "backend",
    icon: "/icons/graphql.svg",
  },

  // Tools
  {
    name: "Git/GitHub",
    level: 50,
    category: "tools",
    icon: "/icons/git.svg",
  },
  { name: "Docker", level: 50, category: "tools", icon: "/icons/docker.svg" },
  { name: "VS Code", level: 50, category: "tools", icon: "/icons/vscode.svg" },
  {
    name: "shadcn/ui",
    level: 50,
    category: "tools",
    icon: "/icons/shadcn.svg",
  },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="flex flex-col items-center gap-4 p-6 bg-card rounded-xl shadow-md card-hover"
            >
              {/* Icon */}
              <div className="w-12 h-12">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain invert dark:invert-0"
                />
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 bg-secondary/50 rounded-full overflow-hidden">
                <div
                  className="h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{
                    width: skill.level + "%",
                    background:
                      "linear-gradient(90deg, #4ade80 0%, #22d3ee 100%)",
                  }}
                />
              </div>

              {/* Optional label */}
              <div className="text-sm text-muted-foreground">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
