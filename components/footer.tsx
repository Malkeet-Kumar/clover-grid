import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

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
  { name: "Services", href: "/services" },
];

const resources = [
  // { name: "Blog", href: "/blog" },
  // { name: "Case Studies", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
  { name: "Get Quote", href: "/quote" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
                <span className="font-heading font-bold text-xl">
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
            {/* Resources */}
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                {resources.map((item) => (
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
                  <span className="text-sm">hello@clovergrid.dev</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <a
                    href="tel:+918397087924"
                    className="flex items-center space-x-3"
                  >
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">+91 83970-87924</span>
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <a
                    href="https://wa.me/+919813940038"
                    className="flex items-center space-x-3"
                  >
                    <span className="h-4 w-4 flex-shrink-0">
                      <svg
                        className="h-4 w-4 text-muted-foreground"
                        xmlns="http://www.w3.org/2000/svg"
                        width="200"
                        height="200"
                        viewBox="0 0 24 24"
                        fill="#000000"
                      >
                        <path
                          fill="#000000"
                          d="M16.6 14c-.2-.1-1.5-.7-1.7-.8c-.2-.1-.4-.1-.6.1c-.2.2-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5c.1-.1.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4c-.1-.1-.6-1.3-.8-1.8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3c-.6.6-.9 1.3-.9 2.1c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"
                        />
                      </svg>
                    </span>
                    <span className="text-sm">+91 98139-40048</span>
                  </a>
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
                    className="flex-1 outline-none boder border-primary focus:border-primary-600 focus:ring-primary"
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
              © {(() => new Date().getFullYear())()} CloverGrid. All
              rights reserved.
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
