import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  ExternalLink,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  ArrowRight,
} from "lucide-react";
import { getPortfolio } from "@/lib/api";
import { AnimatedCard } from "@/components/animated-card";

const iconMap = {
  TrendingUp,
  Users,
  DollarSign,
  Clock,
};

export default async function PortfolioPage() {
  const allProjects = await getPortfolio();
  const featuredProjects = allProjects.filter((project) => project.featured);
  const otherProjects = allProjects.filter((project) => !project.featured);

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
                Our Portfolio & Case Studies
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              About{" "}
              <span className="text-primary bg-gradient-to-r from-primary-600 to-accent-emerald bg-clip-text text-transparent">
                CloverGrid
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-secondary-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses transform their operations
              and achieve remarkable results through innovative technology
              solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                asChild
                className="text-lg px-10 py-4 bg-primary hover:bg-primary-600 shadow-lg shadow-primary-500/25"
              >
                <Link href="/contact"> Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-24 bg-secondary-50/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-muted-foreground">
                Our most impactful and innovative solutions
              </p>
            </div>

            <div className="space-y-16">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="relative group">
                      <div className="aspect-[4/3] rounded-xl overflow-hidden bg-muted">
                        <img
                          src={project.imageUrl || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-contain transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute inset-0 bg-card/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                        <Button variant="secondary" size="lg" asChild>
                          <Link href={project.projectUrl || "#"}>
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Project
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${
                      index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-4">
                      <Badge variant="secondary" className="capitalize">
                        {project.category}
                      </Badge>
                      <Badge variant="outline">Featured</Badge>
                    </div>
                    <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.longDescription || project.description}
                    </p>

                    {project.results && project.results.length > 0 && (
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {project.results
                          .slice(0, 3)
                          .map((result, metricIndex) => (
                            <div key={metricIndex} className="text-center">
                              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                                <TrendingUp className="h-5 w-5 text-primary" />
                              </div>
                              <div className="text-lg font-bold text-foreground">
                                {result.value}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {result.metric}
                              </div>
                            </div>
                          ))}
                      </div>
                    )}

                    <div className="mb-6 space-y-2">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>
                          <strong>Client:</strong> {project.client}
                        </span>
                        <span>
                          <strong>Duration:</strong> {project.duration}
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button asChild>
                      <Link href={project.projectUrl || "#"}>
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Projects Grid */}
      {otherProjects.length > 0 && (
        <section className="py-20 bg-background/10 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                More Projects
              </h2>
              <p className="text-xl text-muted-foreground">
                Additional solutions we've delivered for our clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project) => (
                <AnimatedCard
                  key={project.id}
                  className="group bg-white border border-secondary-200 hover:border-primary-300 rounded-3xl pb-5 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="capitalize">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-heading">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Results */}
                    {project.results && project.results.length > 0 && (
                      <div className="grid grid-cols-3 gap-2">
                        {project.results
                          .slice(0, 3)
                          .map((result, metricIndex) => (
                            <div key={metricIndex} className="text-center">
                              <div className="text-sm font-bold text-primary">
                                {result.value}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {result.metric}
                              </div>
                            </div>
                          ))}
                      </div>
                    )}

                    {/* Technologies */}
                    <div>
                      <div className="flex flex-wrap gap-1">
                        {project.techStack
                          .slice(0, 3)
                          .map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        {project.techStack.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.techStack.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full text-primary border border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                      asChild
                    >
                      <Link href={project.projectUrl || "#"}>
                        View Details
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-600 to-accent-emerald relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:24px_24px]"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6 text-white">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl lg:text-2xl text-primary-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss your project and explore how we can deliver similar
              results for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="text-lg px-10 py-4 bg-white text-primary-600 hover:bg-primary-50 hover:text-primary-700 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Link href="/contact">Get Project Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-10 py-4 border border-primary-foreground hover:border-white text-white hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                <Link href="/services">Schedule Consultation</Link>
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
