import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";
import { getServices, getPortfolio } from "@/lib/api";
import {
  Code,
  Smartphone,
  Cloud,
  Bot,
  Palette,
  Database,
  Headphones,
  Zap,
} from "lucide-react";
import { AnimatedCard } from "@/components/animated-card";
import { AnimatedButton } from "@/components/animated-button";
import { StaggerContainer, StaggerItem } from "@/components/stagger-container";
import { PageTransition } from "@/components/page-transition";

const iconMap = {
  Code,
  Smartphone,
  Cloud,
  Bot,
  Palette,
  Database,
  Headphones,
  Zap,
};

export default async function HomePage() {
  const services = await getServices();
  const featuredPortfolio = await getPortfolio({ featured: true, limit: 4 });

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section - Enhanced with better gradients and spacing */}
        <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
          {/* Enhanced background with multiple layers */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-background to-secondary-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,rgb(0,0,0)_1px,transparent_0)] bg-[length:24px_24px]" />
          </div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-200 bg-primary-50 text-primary-700 text-sm font-medium">
                  <Star className="h-4 w-4" />
                  Trusted by 200+ Businesses
                </span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
                Transform Your Business with{" "}
                <span className="text-primary bg-gradient-to-r from-primary-600 to-accent-emerald bg-clip-text text-transparent">
                  Cutting-Edge
                </span>{" "}
                IT Solutions
              </h1>

              <p className="text-xl lg:text-2xl text-secondary-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                We deliver innovative web development, mobile apps, cloud
                solutions, and AI automation to help your business thrive in the
                digital age.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <AnimatedButton
                  size="lg"
                  asChild
                  className="text-lg px-10 py-4 bg-primary hover:bg-primary-600 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300"
                >
                  <Link href="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </AnimatedButton>
                <AnimatedButton
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-lg px-10 py-4 border-2 border-secondary-200 hover:border-primary-300 hover:bg-primary-50 text-secondary-700 hover:text-primary-700"
                >
                  <Link href="/portfolio">View Our Work</Link>
                </AnimatedButton>
              </div>

              {/* Trust indicators */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                {[
                  { icon: Users, value: "200+", label: "Happy Clients" },
                  { icon: Award, value: "5+", label: "Years Experience" },
                  { icon: TrendingUp, value: "95%", label: "Success Rate" },
                  { icon: Star, value: "4.9", label: "Client Rating" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary-100 flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-secondary-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview - Enhanced design */}
        <section className="py-24 bg-secondary-50/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="mb-4">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
                  Our Services
                </span>
              </div>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Comprehensive IT Solutions
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
                From concept to deployment, we provide end-to-end technology
                solutions tailored to accelerate your business growth
              </p>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.slice(0, 4).map((service, index) => {
                const IconComponent =
                  iconMap[service.icon as keyof typeof iconMap] || Code;
                return (
                  <StaggerItem key={service.id}>
                    <AnimatedCard delay={index * 0.1}>
                      <div className="group relative bg-white border border-secondary-200 hover:border-primary-300 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1">
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-accent-emerald/0 group-hover:from-primary-50/50 group-hover:to-accent-emerald/20 rounded-2xl transition-all duration-300" />

                        <div className="relative z-10">
                          <div className="w-16 h-16 bg-primary-100 group-hover:bg-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                            <IconComponent className="h-8 w-8 text-primary-600 group-hover:text-primary-700" />
                          </div>
                          <h3 className="font-heading font-bold text-xl text-foreground mb-4 group-hover:text-primary-700 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-secondary-600 leading-relaxed mb-6">
                            {service.description}
                          </p>
                          <div className="text-primary-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Learn More →
                          </div>
                        </div>
                      </div>
                    </AnimatedCard>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            <div className="text-center mt-16">
              <AnimatedButton
                variant="outline"
                size="lg"
                asChild
                className="border-2 border-secondary-300 hover:border-primary-400 text-secondary-700 hover:text-primary-600 hover:bg-primary-50"
              >
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </AnimatedButton>
            </div>
          </div>
        </section>

        {/* Featured Projects - Enhanced layout */}
        {featuredPortfolio.length > 0 && (
          <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20">
                <div className="mb-4">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent-emerald/10 text-accent-emerald text-sm font-medium">
                    Portfolio
                  </span>
                </div>
                <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Featured Projects
                </h2>
                <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
                  Discover how we've helped businesses like yours achieve
                  digital transformation and accelerate growth
                </p>
              </div>

              <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {featuredPortfolio.map((project, index) => (
                  <StaggerItem key={project.id}>
                    <AnimatedCard delay={index * 0.2}>
                      <div className="group bg-white border border-secondary-200 hover:border-primary-300 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-2">
                        <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-accent-emerald/20 relative overflow-hidden">
                          <img
                            src={project.imageUrl || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        <div className="p-8">
                          <div className="flex items-center gap-2 mb-4">
                            <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                              {project.client}
                            </span>
                          </div>

                          <h3 className="font-heading font-bold text-2xl text-foreground mb-4 group-hover:text-primary-600 transition-colors">
                            {project.title}
                          </h3>

                          <p className="text-secondary-600 mb-6 leading-relaxed">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.techStack.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-secondary-100 text-secondary-700 text-sm rounded-full font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.techStack.length > 3 && (
                              <span className="px-3 py-1 bg-secondary-100 text-secondary-700 text-sm rounded-full font-medium">
                                +{project.techStack.length - 3} more
                              </span>
                            )}
                          </div>

                          <AnimatedButton
                            variant="ghost"
                            size="sm"
                            asChild
                            className="text-primary-600 hover:text-primary-700 hover:bg-primary-50 p-0 h-auto font-medium"
                          >
                            <Link href={`/portfolio`}>
                              View Case Study
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </AnimatedButton>
                        </div>
                      </div>
                    </AnimatedCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div className="text-center mt-16">
                <AnimatedButton
                  size="lg"
                  asChild
                  className="bg-primary hover:bg-primary-600 shadow-lg shadow-primary-500/25"
                >
                  <Link href="/portfolio">
                    View All Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </AnimatedButton>
              </div>
            </div>
          </section>
        )}

        {/* Why Choose Us - Redesigned with better visual hierarchy */}
        <section className="py-24 bg-gradient-to-br from-secondary-50 via-primary-50/30 to-accent-emerald/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="mb-6">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
                    Why Choose Us
                  </span>
                </div>

                <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-8">
                  Your Success Is Our{" "}
                  <span className="text-primary">Priority</span>
                </h2>

                <p className="text-xl text-secondary-600 mb-10 leading-relaxed">
                  We combine technical expertise with business acumen to deliver
                  solutions that drive measurable results and sustainable
                  growth.
                </p>

                <StaggerContainer className="space-y-6">
                  {[
                    {
                      text: "Expert team with 10+ years of experience",
                      desc: "Senior developers and architects with proven track records",
                    },
                    {
                      text: "Cutting-edge technologies and best practices",
                      desc: "Always using the latest, most effective tools and methodologies",
                    },
                    {
                      text: "Agile development methodology",
                      desc: "Fast, iterative delivery with continuous client collaboration",
                    },
                    {
                      text: "24/7 support and maintenance",
                      desc: "Round-the-clock monitoring and rapid issue resolution",
                    },
                    {
                      text: "Proven track record with 200+ successful projects",
                      desc: "Consistently delivering projects on time and within budget",
                    },
                  ].map((item, index) => (
                    <StaggerItem key={index}>
                      <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/60 transition-colors duration-300">
                        <div className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <div className="text-foreground font-semibold text-lg mb-1">
                            {item.text}
                          </div>
                          <div className="text-secondary-600 text-sm">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <div className="mt-12">
                  <AnimatedButton
                    size="lg"
                    asChild
                    className="bg-primary hover:bg-primary-600 shadow-lg shadow-primary-500/25"
                  >
                    <Link href="/about">
                      Learn More About Us
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </AnimatedButton>
                </div>
              </div>

              <AnimatedCard direction="right" delay={0.3}>
                <div className="relative">
                  {/* Stats cards */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white border border-secondary-200 rounded-2xl p-8 text-center shadow-lg">
                      <div className="text-4xl font-bold text-primary-600 mb-2">
                        200+
                      </div>
                      <div className="text-secondary-600 font-medium">
                        Projects Completed
                      </div>
                    </div>
                    <div className="bg-white border border-secondary-200 rounded-2xl p-8 text-center shadow-lg">
                      <div className="text-4xl font-bold text-accent-emerald mb-2">
                        95%
                      </div>
                      <div className="text-secondary-600 font-medium">
                        Client Retention
                      </div>
                    </div>
                    <div className="bg-white border border-secondary-200 rounded-2xl p-8 text-center shadow-lg">
                      <div className="text-4xl font-bold text-accent-teal mb-2">
                        24/7
                      </div>
                      <div className="text-secondary-600 font-medium">
                        Support Available
                      </div>
                    </div>
                    <div className="bg-white border border-secondary-200 rounded-2xl p-8 text-center shadow-lg">
                      <div className="text-4xl font-bold text-accent-lime mb-2">
                        5+
                      </div>
                      <div className="text-secondary-600 font-medium">
                        Years Experience
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-200/30 rounded-full -z-10"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-emerald/20 rounded-full -z-10"></div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced with better contrast and visual appeal */}
        <section className="py-24 bg-gradient-to-br from-primary-600 to-accent-emerald relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:24px_24px]"></div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl lg:text-2xl text-primary-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                Let's discuss your project and explore how we can help you
                achieve your digital goals with cutting-edge solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <AnimatedButton
                  size="lg"
                  variant="secondary"
                  asChild
                  className="text-lg px-10 py-4 bg-white text-primary-600 hover:bg-primary-50 hover:text-primary-700 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Link href="/contact">Start Your Project</Link>
                </AnimatedButton>
                <AnimatedButton
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-lg px-10 py-4 border-2 border-white/30 hover:border-white text-white hover:bg-white hover:text-primary-600 transition-all duration-300"
                >
                  <Link href="/quote">Get Free Quote</Link>
                </AnimatedButton>
              </div>

              <div className="mt-12 text-primary-100 text-sm">
                <span>
                  💡 Free consultation • No commitment required • Response
                  within 24 hours
                </span>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}
