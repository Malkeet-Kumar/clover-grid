import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Code,
  Smartphone,
  Database,
  Cloud,
  Palette,
  Building,
  Bot,
  Wrench,
  ArrowRight,
  CheckCircle,
  Globe,
  Server,
  Zap,
} from "lucide-react"
import { getServices } from "@/lib/api"

const iconMap = {
  Code,
  Smartphone,
  Database,
  Cloud,
  Palette,
  Building,
  Bot,
  Wrench,
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Comprehensive IT Services for Modern Businesses
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              From web development to AI automation, we provide end-to-end technology solutions that drive growth and
              innovation.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Discuss Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code
              return (
                <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-border">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                          <p className="text-primary font-medium mt-1">
                            Starting from ${service.pricing.starting.toLocaleString()} {service.pricing.currency}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-4">{service.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 border-t border-border">
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                        asChild
                      >
                        <Link href={`/quote?service=${service.id}`}>
                          Get Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: "Discovery",
                description: "We analyze your requirements and define project scope.",
              },
              {
                icon: Palette,
                title: "Design",
                description: "Create wireframes, prototypes, and visual designs.",
              },
              {
                icon: Server,
                title: "Development",
                description: "Build your solution using agile development practices.",
              },
              {
                icon: Zap,
                title: "Launch",
                description: "Deploy, test, and provide ongoing support.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/quote">Get Free Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
