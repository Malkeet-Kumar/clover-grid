import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  Smartphone,
  Database,
  Cloud,
  Palette,
  Zap,
} from "lucide-react";
import { AnimatedCard } from "@/components/animated-card";

const techCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    description:
      "Modern frameworks and libraries for building exceptional user interfaces",
    technologies: [
      {
        name: "React",
        logo: "/icons/react.png",
        description: "Component-based UI library",
      },
      {
        name: "Next.js",
        logo: "/icons/next.png",
        description: "Full-stack React framework",
      },
      {
        name: "Vue.js",
        logo: "/icons/vue.png",
        description: "Progressive JavaScript framework",
      },
      {
        name: "Angular",
        logo: "/icons/angular.png",
        description: "Platform for web applications",
      },
      {
        name: "TypeScript",
        logo: "/icons/typescript.png",
        description: "Typed JavaScript",
      },
      {
        name: "TailwindCSS",
        logo: "/icons/tailwindcss.png",
        description: "Utility-first CSS framework",
      },
      {
        name: "Angular",
        logo: "/icons/angular.png",
        description: "Platform for web applications",
      },
      {
        name: "TypeScript",
        logo: "/icons/typescript.png",
        description: "Typed JavaScript",
      },
      {
        name: "TailwindCSS",
        logo: "/icons/tailwindcss.png",
        description: "Utility-first CSS framework",
      },
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    description: "Robust server-side technologies for scalable applications",
    technologies: [
      {
        name: "Node.js",
        logo: "/icons/nodejs.png",
        description: "JavaScript runtime",
      },
      {
        name: "Express",
        logo: "/icons/express.webp",
        description: "Web framework for Node.js",
      },
      {
        name: "NestJS",
        logo: "/icons/nestjs.png",
        description: "Enterprise Node.js framework",
      },
      {
        name: "Python",
        logo: "/icons/python.png",
        description: "Versatile programming language",
      },
      {
        name: "FastAPI",
        logo: "/icons/fastapi.png",
        description: "Modern Python web framework",
      },
      {
        name: "GraphQL",
        logo: "/icons/graphql.png",
        description: "Query language for APIs",
      },
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    description: "Cross-platform and native mobile application development",
    technologies: [
      {
        name: "React Native",
        logo: "/icons/react.png",
        description: "Cross-platform mobile apps",
      },
      {
        name: "Flutter",
        logo: "/icons/flutter.webp",
        description: "Google's UI toolkit",
      },
      {
        name: "Swift",
        logo: "/icons",
        description: "iOS development language",
      },
      {
        name: "Kotlin",
        logo: "/icons",
        description: "Android development language",
      },
      {
        name: "Expo",
        logo: "/icons/expo.png",
        description: "React Native platform",
      },
      {
        name: "Ionic",
        logo: "/icons/ionic.png",
        description: "Hybrid mobile apps",
      },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    description: "Modern database solutions for data storage and management",
    technologies: [
      {
        name: "PostgreSQL",
        logo: "/icons/postgresql.png",
        description: "Advanced relational database",
      },
      {
        name: "MongoDB",
        logo: "/icons/mongodb.png",
        description: "NoSQL document database",
      },
      {
        name: "MySQL",
        logo: "/icons/mysql.svg",
        description: "Popular relational database",
      },
      {
        name: "Redis",
        logo: "/icons/redis.jpg",
        description: "In-memory data store",
      },
      {
        name: "Supabase",
        logo: "/icons/supabase.png",
        description: "Open source Firebase alternative",
      },
      {
        name: "Prisma",
        logo: "/icons/prisma.svg",
        description: "Next-generation ORM",
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    description: "Cloud infrastructure and deployment automation tools",
    technologies: [
      {
        name: "AWS",
        logo: "/placeholder.svg?height=60&width=60",
        description: "Amazon Web Services",
      },
      {
        name: "Vercel",
        logo: "/placeholder.svg?height=60&width=60",
        description: "Frontend deployment platform",
      },
      {
        name: "Docker",
        logo: "/placeholder.svg?height=60&width=60",
        description: "Containerization platform",
      },
      {
        name: "Kubernetes",
        logo: "/placeholder.svg?height=60&width=60",
        description: "Container orchestration",
      },
      {
        name: "GitHub Actions",
        logo: "/placeholder.svg?height=60&width=60",
        description: "CI/CD automation",
      },
      {
        name: "Terraform",
        logo: "/placeholder.svg?height=60&width=60",
        description: "Infrastructure as code",
      },
    ],
  },
  {
    title: "Design & Tools",
    icon: Palette,
    description:
      "Design and development tools for creating exceptional experiences",
    technologies: [
      {
        name: "Figma",
        logo: "/placeholder.svg?height=60&width=60",
        description: "Collaborative design tool",
      },
      {
        name: "Adobe XD",
        logo: "/placeholder.svg?height=60&width=60",
        description: "UI/UX design platform",
      },
      {
        name: "Framer",
        logo: "/placeholder.svg?height=60&width=60",
        description: "Interactive design tool",
      },
      {
        name: "Sketch",
        logo: "/placeholder.svg?height=60&width=60",
        description: "Digital design toolkit",
      },
      {
        name: "Storybook",
        logo: "/placeholder.svg?height=60&width=60",
        description: "Component development tool",
      },
      {
        name: "Jest",
        logo: "/placeholder.svg?height=60&width=60",
        description: "JavaScript testing framework",
      },
    ],
  },
  {
    title: "AI & Automation",
    icon: Zap,
    description: "Artificial intelligence and automation technologies",
    technologies: [
      {
        name: "OpenAI",
        logo: "/placeholder.svg?height=60&width=60",
        description: "AI language models",
      },
      {
        name: "TensorFlow",
        logo: "/placeholder.svg?height=60&width=60",
        description: "Machine learning platform",
      },
      {
        name: "LangChain",
        logo: "/placeholder.svg?height=60&width=60",
        description: "LLM application framework",
      },
      {
        name: "Hugging Face",
        logo: "/placeholder.svg?height=60&width=60",
        description: "ML model hub",
      },
      {
        name: "Zapier",
        logo: "/placeholder.svg?height=60&width=60",
        description: "Workflow automation",
      },
      {
        name: "n8n",
        logo: "/placeholder.svg?height=60&width=60",
        description: "Workflow automation tool",
      },
    ],
  },
];

export default function TechStackPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        {/* Enhanced background with multiple layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-background to-secondary-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,rgb(0,0,0)_1px,transparent_0)] bg-[length:24px_24px]" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-200 bg-primary-50 text-primary-700 text-sm font-medium">
                {/* <Heart className="h-4 w-4" /> */}
                Our Technology Stack
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              About{" "}
              <span className="text-primary bg-gradient-to-r from-primary-600 to-accent-emerald bg-clip-text text-transparent">
                Tech{" "}
              </span>
              Solutions
            </h1>

            <p className="text-xl lg:text-2xl text-secondary-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              We leverage cutting-edge technologies and proven frameworks to
              build scalable, maintainable, and high-performance solutions for
              our clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                asChild
                className="text-lg px-10 py-4 bg-primary hover:bg-primary-600 shadow-lg shadow-primary-500/25"
              >
                <Link href="/contact"> Discuss Your Tech Needs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-20 bg-secondary-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {techCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-center mb-12">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                    {category.title}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="w-full flex flex-wrap gap-6 justify-center">
                  {category.technologies.map((tech, techIndex) => (
                    <AnimatedCard
                      key={techIndex}
                      className="w-full md:w-[200px] lg:w-[200px]  group bg-white border border-secondary-200 hover:border-primary-300 py-5 rounded-3xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1"
                    >
                      <CardContent className="p-6">
                        <div className="w-18 h-18 mx-auto mb-4 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                          <img
                            src={tech.logo || "/placeholder.svg"}
                            alt={`${tech.name} logo`}
                            className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300 mix-blend-multiply"
                            loading="lazy"
                          />
                        </div>
                        <h3 className="font-semibold text-center text-foreground mb-2">
                          {tech.name}
                        </h3>
                        <p className="text-xs text-muted-foreground text-center leading-relaxed">
                          {tech.description}
                        </p>
                      </CardContent>
                    </AnimatedCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why We Choose These Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our technology choices are driven by performance, scalability, and
              developer experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Performance First",
                description:
                  "We select technologies that deliver exceptional performance and user experience.",
                icon: Zap,
              },
              {
                title: "Scalability",
                description:
                  "Our stack choices ensure your applications can grow with your business needs.",
                icon: ArrowRight,
              },
              {
                title: "Developer Experience",
                description:
                  "We use tools that enhance productivity and code quality for faster delivery.",
                icon: Code,
              },
              {
                title: "Community Support",
                description:
                  "We choose technologies with strong communities and long-term viability.",
                icon: Database,
              },
              {
                title: "Security",
                description:
                  "Security is built into our technology choices from the ground up.",
                icon: Cloud,
              },
              {
                title: "Future-Proof",
                description:
                  "We stay ahead of trends to ensure your solutions remain current and competitive.",
                icon: Palette,
              },
            ].map((benefit, index) => (
              <AnimatedCard
                key={index}
                className="group bg-white border border-secondary-200 hover:border-primary-300 rounded-3xl p-10 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-center font-semibold text-lg text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-center text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:[grid-template-columns:1fr_1.2fr] gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Deep Technical Expertise
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our team has extensive experience with modern technologies and
                stays current with the latest developments in the tech
                ecosystem.
              </p>

              <div className="space-y-4">
                {[
                  "10+ years of combined experience with modern frameworks",
                  "Certified professionals in cloud platforms and DevOps",
                  "Active contributors to open-source projects",
                  "Regular training and certification updates",
                  "Experience with enterprise-scale applications",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/about">
                    Meet Our Team
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 justify-center">
              {[
                { number: "10+", label: "Innovative Startups Launched" },
                { number: "25+", label: "MVPs Built & Shipped" },
                { number: "95%", label: "Happy Founders & Teams" },
                { number: "⚡", label: "Agile & Fast Execution" },
              ].map((stat, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 0.4}
                  className="w-full md:w-[160px] lg:w-[250px] group bg-white border border-secondary-200 hover:border-primary-300 rounded-3xl p-10 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1"
                >
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-600 to-accent-emerald relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:24px_24px]"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6 text-white">
              Ready to Leverage Our Technical Expertise?
            </h2>
            <p className="text-xl lg:text-2xl text-primary-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our technology stack can power your next project
              and drive your business forward.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                asChild
                className="text-lg px-10 py-4 bg-white text-primary-600 hover:bg-primary-50 hover:text-primary-700 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Link href="/quote">Get In Touch</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-10 py-4 border border-primary-foreground hover:border-white text-primary-foreground hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>

            <div className="mt-12 text-primary-100 text-sm flex flex-row items-center justify-center gap-2">
              <span>{/* <RocketIcon className="w-4" /> */}</span>
              <span>Free consultation • Expert advice • Custom solutions</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
