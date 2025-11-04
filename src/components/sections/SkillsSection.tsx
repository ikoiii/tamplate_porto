import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import ScrollAnimation from "../../components/ui/scroll-animation";
import {
  Code2,
  Database,
  Palette,
  Cloud,
  GitBranch,
  Terminal,
  Globe,
  Smartphone
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-6 h-6" />,
      color: "text-blue-500",
      skills: [
        { name: "React", level: "Advanced" },
        { name: "Next.js", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "JavaScript", level: "Expert" },
        { name: "HTML/CSS", level: "Expert" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Redux", level: "Intermediate" },
        { name: "Vue.js", level: "Intermediate" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Terminal className="w-6 h-6" />,
      color: "text-green-500",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "Python", level: "Intermediate" },
        { name: "Django", level: "Intermediate" },
        { name: "REST APIs", level: "Expert" },
        { name: "GraphQL", level: "Intermediate" },
        { name: "Prisma", level: "Advanced" }
      ]
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      color: "text-purple-500",
      skills: [
        { name: "PostgreSQL", level: "Advanced" },
        { name: "MongoDB", level: "Advanced" },
        { name: "MySQL", level: "Intermediate" },
        { name: "Redis", level: "Intermediate" },
        { name: "SQLite", level: "Intermediate" }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      color: "text-orange-500",
      skills: [
        { name: "AWS", level: "Intermediate" },
        { name: "Vercel", level: "Advanced" },
        { name: "Docker", level: "Intermediate" },
        { name: "Git", level: "Expert" },
        { name: "CI/CD", level: "Intermediate" },
        { name: "Linux", level: "Intermediate" }
      ]
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-6 h-6" />,
      color: "text-pink-500",
      skills: [
        { name: "Figma", level: "Intermediate" },
        { name: "Responsive Design", level: "Expert" },
        { name: "UI Components", level: "Advanced" },
        { name: "Wireframing", level: "Intermediate" },
        { name: "Prototyping", level: "Intermediate" }
      ]
    },
    {
      title: "Mobile & Other",
      icon: <Smartphone className="w-6 h-6" />,
      color: "text-cyan-500",
      skills: [
        { name: "React Native", level: "Intermediate" },
        { name: "Next.js 13+", level: "Advanced" },
        { name: "shadcn/ui", level: "Advanced" },
        { name: "Jest", level: "Intermediate" },
        { name: "Storybook", level: "Intermediate" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Advanced": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <ScrollAnimation key={index} delay={index * 0.1} direction={index % 2 === 0 ? "up" : "down"}>
              <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={category.color}>
                      {category.icon}
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center justify-between transition-all duration-300 hover:translate-x-1"
                        style={{ transitionDelay: `${skillIndex * 0.05}s` }}
                      >
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <Badge
                          variant="secondary"
                          className={`text-xs ${getLevelColor(skill.level)} transition-all duration-300 hover:scale-110`}
                        >
                          {skill.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={0.5}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 text-muted-foreground bg-muted/50 px-6 py-3 rounded-full transition-all duration-300 hover:bg-muted hover:scale-105">
              <GitBranch className="w-5 h-5" />
              <span className="text-sm">
                Always learning and adapting to new technologies
              </span>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default SkillsSection;