import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import ScrollAnimation from "../../components/ui/scroll-animation";
import { Calendar, MapPin, GraduationCap } from "lucide-react";

const AboutSection = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Company",
      period: "2022 - Present",
      location: "Jakarta, Indonesia",
      description: "Leading development of web applications using React, Next.js, and Node.js."
    },
    {
      title: "Full Stack Developer",
      company: "Startup XYZ",
      period: "2020 - 2022",
      location: "Bandung, Indonesia",
      description: "Developed and maintained multiple client projects using modern web technologies."
    },
    {
      title: "Junior Developer",
      company: "Digital Agency",
      period: "2019 - 2020",
      location: "Surabaya, Indonesia",
      description: "Started my journey building responsive websites and learning best practices."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "University of Indonesia",
      period: "2015 - 2019",
      location: "Depok, Indonesia"
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
    "Python", "PostgreSQL", "MongoDB", "Docker", "AWS"
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn more about my background, experience, and skills
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollAnimation direction="right">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                My Story
              </h3>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-4">
                  I'm a passionate Full Stack Developer with over 5 years of experience
                  building web applications. My journey started with a curiosity about how
                  websites work, which evolved into a career dedicated to creating meaningful
                  digital experiences.
                </p>
                <p className="mb-4">
                  I specialize in React ecosystem and modern JavaScript frameworks, but I'm
                  always eager to learn new technologies and best practices. I believe in
                  writing clean, maintainable code and creating user-centric solutions.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing
                  to open-source projects, or sharing knowledge through technical writing.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Core Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={skill} variant="secondary" className="transition-all duration-300 hover:scale-105">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Experience
                </h3>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <ScrollAnimation key={index} delay={index * 0.1}>
                      <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
                        <CardContent className="p-6">
                          <h4 className="text-lg font-semibold text-foreground mb-2">
                            {exp.title}
                          </h4>
                          <p className="text-primary font-medium mb-2">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                          <p className="text-muted-foreground">
                            {exp.description}
                          </p>
                        </CardContent>
                      </Card>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Education
                </h3>
                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {education[0].degree}
                        </h4>
                        <p className="text-primary font-medium mb-2">
                          {education[0].school}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {education[0].period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {education[0].location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;