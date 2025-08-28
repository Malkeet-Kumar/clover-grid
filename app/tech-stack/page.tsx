import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Code, Smartphone, Database, Cloud, Palette, Zap } from "lucide-react"

const techCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    description: "Modern frameworks and libraries for building exceptional user interfaces",
    technologies: [
      { name: "React", logo: "/icons/react.png", description: "Component-based UI library" },
      { name: "Next.js", logo: "/icons/next.png", description: "Full-stack React framework" },
      { name: "Vue.js", logo: "/icons/vue.png", description: "Progressive JavaScript framework" },
      { name: "Angular", logo: "/icons/angular.png", description: "Platform for web applications" },
      { name: "TypeScript", logo: "/icons/typescript.png", description: "Typed JavaScript" },
      { name: "TailwindCSS", logo: "/icons/tailwindcss.png", description: "Utility-first CSS framework" },
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    description: "Robust server-side technologies for scalable applications",
    technologies: [
      { name: "Node.js", logo: "/icons/nodejs.png", description: "JavaScript runtime" },
      { name: "Express", logo: "/icons/express.webp", description: "Web framework for Node.js" },
      { name: "NestJS", logo: "/icons/nestjs.png", description: "Enterprise Node.js framework" },
      { name: "Python", logo: "/icons/python.png", description: "Versatile programming language" },
      { name: "FastAPI", logo: "/icons/fastapi.png", description: "Modern Python web framework" },
      { name: "GraphQL", logo: "/icons/graphql.png", description: "Query language for APIs" },
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    description: "Cross-platform and native mobile application development",
    technologies: [
      { name: "React Native", logo: "/icons/react.png", description: "Cross-platform mobile apps" },
      { name: "Flutter", logo: "/icons/flutter.webp", description: "Google's UI toolkit" },
      { name: "Swift", logo: "/icons", description: "iOS development language" },
      { name: "Kotlin", logo: "/icons", description: "Android development language" },
      { name: "Expo", logo: "/icons/expo.png", description: "React Native platform" },
      { name: "Ionic", logo: "/icons/ionic.png", description: "Hybrid mobile apps" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    description: "Modern database solutions for data storage and management",
    technologies: [
      { name: "PostgreSQL", logo: "/icons/postgresql.png", description: "Advanced relational database" },
      { name: "MongoDB", logo: "/icons/mongodb.png", description: "NoSQL document database" },
      { name: "MySQL", logo: "/icons/mysql.svg", description: "Popular relational database" },
      { name: "Redis", logo: "/icons/redis.jpg", description: "In-memory data store" },
      {
        name: "Supabase",
        logo: "/icons/supabase.png",
        description: "Open source Firebase alternative",
      },
      { name: "Prisma", logo: "/icons/prisma.svg", description: "Next-generation ORM" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    description: "Cloud infrastructure and deployment automation tools",
    technologies: [
      { name: "AWS", logo: "/placeholder.svg?height=60&width=60", description: "Amazon Web Services" },
      { name: "Vercel", logo: "/placeholder.svg?height=60&width=60", description: "Frontend deployment platform" },
      { name: "Docker", logo: "/placeholder.svg?height=60&width=60", description: "Containerization platform" },
      { name: "Kubernetes", logo: "/placeholder.svg?height=60&width=60", description: "Container orchestration" },
      { name: "GitHub Actions", logo: "/placeholder.svg?height=60&width=60", description: "CI/CD automation" },
      { name: "Terraform", logo: "/placeholder.svg?height=60&width=60", description: "Infrastructure as code" },
    ],
  },
  {
    title: "Design & Tools",
    icon: Palette,
    description: "Design and development tools for creating exceptional experiences",
    technologies: [
      { name: "Figma", logo: "/placeholder.svg?height=60&width=60", description: "Collaborative design tool" },
      { name: "Adobe XD", logo: "/placeholder.svg?height=60&width=60", description: "UI/UX design platform" },
      { name: "Framer", logo: "/placeholder.svg?height=60&width=60", description: "Interactive design tool" },
      { name: "Sketch", logo: "/placeholder.svg?height=60&width=60", description: "Digital design toolkit" },
      { name: "Storybook", logo: "/placeholder.svg?height=60&width=60", description: "Component development tool" },
      { name: "Jest", logo: "/placeholder.svg?height=60&width=60", description: "JavaScript testing framework" },
    ],
  },
  {
    title: "AI & Automation",
    icon: Zap,
    description: "Artificial intelligence and automation technologies",
    technologies: [
      { name: "OpenAI", logo: "/placeholder.svg?height=60&width=60", description: "AI language models" },
      { name: "TensorFlow", logo: "/placeholder.svg?height=60&width=60", description: "Machine learning platform" },
      { name: "LangChain", logo: "/placeholder.svg?height=60&width=60", description: "LLM application framework" },
      { name: "Hugging Face", logo: "/placeholder.svg?height=60&width=60", description: "ML model hub" },
      { name: "Zapier", logo: "/placeholder.svg?height=60&width=60", description: "Workflow automation" },
      { name: "n8n", logo: "/placeholder.svg?height=60&width=60", description: "Workflow automation tool" },
    ],
  },
]

export default function TechStackPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">Our Technology Stack</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We leverage cutting-edge technologies and proven frameworks to build scalable, maintainable, and
              high-performance solutions for our clients.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Discuss Your Tech Needs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {techCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-center mb-12">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-4">{category.title}</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{category.description}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {category.technologies.map((tech, techIndex) => (
                    <Card
                      key={techIndex}
                      className="group hover:shadow-lg transition-all duration-300 border-border text-center"
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
                        <h3 className="font-semibold text-foreground mb-2">{tech.name}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">{tech.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Stack */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why We Choose These Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our technology choices are driven by performance, scalability, and developer experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Performance First",
                description: "We select technologies that deliver exceptional performance and user experience.",
                icon: Zap,
              },
              {
                title: "Scalability",
                description: "Our stack choices ensure your applications can grow with your business needs.",
                icon: ArrowRight,
              },
              {
                title: "Developer Experience",
                description: "We use tools that enhance productivity and code quality for faster delivery.",
                icon: Code,
              },
              {
                title: "Community Support",
                description: "We choose technologies with strong communities and long-term viability.",
                icon: Database,
              },
              {
                title: "Security",
                description: "Security is built into our technology choices from the ground up.",
                icon: Cloud,
              },
              {
                title: "Future-Proof",
                description: "We stay ahead of trends to ensure your solutions remain current and competitive.",
                icon: Palette,
              },
            ].map((benefit, index) => (
              <Card key={index} className="bg-background text-center border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Deep Technical Expertise
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our team has extensive experience with modern technologies and stays current with the latest
                developments in the tech ecosystem.
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

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "50+", label: "Technologies Mastered" },
                { number: "200+", label: "Projects Delivered" },
                { number: "99.9%", label: "Uptime Achieved" },
                { number: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <Card key={index} className="text-center border-border">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            Ready to Leverage Our Technical Expertise?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology stack can power your next project and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/quote">Get Technical Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
