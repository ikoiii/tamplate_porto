"use client";

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/yourusername",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:your.email@example.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Angger Bayu Sentiko
              </h3>
              <p className="text-muted-foreground mb-4 max-w-sm">
                Full Stack Developer passionate about creating beautiful and functional web applications.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="sm"
                    asChild
                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#home"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#skills"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Let's Connect
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:your.email@example.com"
                    className="hover:text-primary transition-colors"
                  >
                    your.email@example.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Github className="w-4 h-4" />
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    github.com/yourusername
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Linkedin className="w-4 h-4" />
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    linkedin.com/in/yourusername
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Angger Bayu Sentiko. Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>using Next.js & shadcn/ui</span>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;