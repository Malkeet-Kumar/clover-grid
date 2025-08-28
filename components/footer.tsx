import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const services = [
  { name: "Web Development", href: "/services#web-development" },
  { name: "Mobile Apps", href: "/services#mobile-apps" },
  { name: "Cloud Solutions", href: "/services#cloud-solutions" },
  { name: "AI & Automation", href: "/services#ai-automation" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Tech Stack", href: "/tech-stack" },
  { name: "Careers", href: "/careers" },
];

const resources = [
  { name: "Blog", href: "/blog" },
  { name: "Case Studies", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
  { name: "Get Quote", href: "/quote" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2">
                <div className="h-8 flex items-center justify-center">
                  <img
                    src="/logo_emblem.png"
                    className="h-full md:mr-0.5"
                    alt="logo"
                  />
                </div>
                <span className="font-heading font-bold text-xl text-accent-foreground">
                  CloverGrid
                </span>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Transforming businesses through innovative IT solutions. We
                specialize in web development, mobile apps, cloud services, and
                AI automation.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="#" aria-label="Facebook">
                    <Facebook className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="#" aria-label="Twitter">
                    <Twitter className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="#" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="#" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">
                Get in Touch
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">hello@techflow.com</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div>
                <h4 className="font-medium text-foreground mb-2">Newsletter</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Get the latest tech insights and updates.
                </p>
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1"
                  />
                  <Button size="icon">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 TechFlow Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
