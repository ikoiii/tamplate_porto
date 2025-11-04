import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { ExternalLink, Github, Star } from "lucide-react";
import Image from "next/image";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "/projects/ecommerce.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.vercel.app",
      featured: true,
      stars: 42
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/projects/taskmanager.jpg",
      technologies: ["Next.js", "TypeScript", "Prisma", "WebSocket", "shadcn/ui"],
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://task-manager-demo.vercel.app",
      featured: true,
      stars: 28
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "/projects/weather.jpg",
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      liveUrl: "https://weather-demo.vercel.app",
      featured: false,
      stars: 15
    },
    {
      title: "Blog Platform",
      description: "Modern blog platform with Markdown support, code syntax highlighting, and SEO optimization.",
      image: "/projects/blog.jpg",
      technologies: ["Next.js", "MDX", "Vercel", "Remark", "Rehype"],
      githubUrl: "https://github.com/yourusername/blog-platform",
      liveUrl: "https://blog-demo.vercel.app",
      featured: false,
      stars: 31
    },
    {
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media metrics with data visualization and reporting features.",
      image: "/projects/analytics.jpg",
      technologies: ["Vue.js", "D3.js", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/yourusername/social-analytics",
      liveUrl: "https://analytics-demo.vercel.app",
      featured: false,
      stars: 19
    },
    {
      title: "Portfolio Template",
      description: "Responsive portfolio template with dark mode support and smooth animations.",
      image: "/projects/portfolio.jpg",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      githubUrl: "https://github.com/yourusername/portfolio-template",
      liveUrl: "https://portfolio-template.vercel.app",
      featured: false,
      stars: 56
    }
  ];

  const getTechBadgeColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      "React": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      "Next.js": "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
      "TypeScript": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      "Node.js": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      "Tailwind CSS": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300",
      "PostgreSQL": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      "MongoDB": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      "shadcn/ui": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
      "Prisma": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
      "Vercel": "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    };
    return colors[tech] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  };

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work and side projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation key={index} delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
              <Card
                className={`group hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                  project.featured ? "ring-2 ring-primary/20" : ""
                }`}
              >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="aspect-video bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Github className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Project Screenshot
                      </p>
                    </div>
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-4 left-4" variant="default">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{project.stars}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className={`text-xs ${getTechBadgeColor(tech)}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 flex gap-3">
                <Button size="sm" variant="outline" asChild className="flex-1">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild className="flex-1">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={0.6}>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild className="transition-all duration-300 hover:scale-105">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                View More on GitHub
              </a>
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ProjectsSection;