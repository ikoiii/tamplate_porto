import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import ScrollAnimation from "../../components/ui/scroll-animation";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:your.email@example.com",
      label: "Email",
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <ScrollAnimation delay={0.1}>
            <div className="mb-8">
              <Avatar className="w-32 h-32 mx-auto mb-6">
                <AvatarImage src="/avatar.jpg" alt="Profile" />
                <AvatarFallback className="text-2xl">ABS</AvatarFallback>
              </Avatar>
              <Badge variant="secondary" className="mb-4 text-sm">
                Available for work
              </Badge>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Hi, I'm{" "}
              <span className="text-primary">Angger Bayu Sentiko</span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Full Stack Developer
            </h2>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Passionate about creating beautiful, functional web applications that solve real-world problems.
              Specialized in React, Next.js, and modern web technologies.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Link>
              </Button>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.6}>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                </Button>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;