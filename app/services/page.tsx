import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
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
  SquareAsteriskIcon,
} from "lucide-react";
import { getServices } from "@/lib/api";
import { AnimatedCard } from "@/components/animated-card";

const iconMap = {
  Code,
  Smartphone,
  Database,
  Cloud,
  Palette,
  Building,
  Bot,
  Wrench,
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] bg-[length:20px_20px]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-200 bg-primary-50 text-primary-700 text-sm font-medium">
              <SquareAsteriskIcon className="h-4 w-4" />
              Services
            </span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            Comprehensive{" "}
            <span className="text-primary bg-gradient-to-r from-primary-600 to-accent-emerald bg-clip-text text-transparent">
              IT Services{" "}
            </span>
            for Modern businesses
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            From web development to AI automation, we provide end-to-end
            technology solutions that help startups and enterprises grow faster,
            smarter, and stronger.
          </p>
          <Button size="lg" asChild className="shadow-lg shadow-primary/25">
            <Link href="/contact">
              Discuss Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {services.map((service, index) => {
              const IconComponent =
                iconMap[service.icon as keyof typeof iconMap];

              const isUrl =
                service.icon.startsWith("http://") ||
                service.icon.startsWith("https://");
              return (
                <AnimatedCard
                  delay={index * 0.3}
                  key={service._id}
                  className="group relative bg-white border border-secondary-200 hover:border-primary-300 rounded-3xl p-10 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          {isUrl ? (
                            <img
                              src={service.icon}
                              className="h-6 w-6 object-cover"
                            />
                          ) : (
                            <IconComponent className="h-6 w-6 text-primary" />
                          )}
                        </div>
                        <div>
                          <CardTitle className="text-xl font-heading">
                            {service.title}
                          </CardTitle>
                          <p className="text-primary font-medium mt-1">
                            Starting from $
                            {service.pricing.starting.toLocaleString()}{" "}
                            {service.pricing.currency}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-4">
                      {service.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 border-t border-border">
                      <Button
                        variant="outline"
                        className="w-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                        asChild
                      >
                        <Link href={`/quote?service=${service.id}`}>
                          Get Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A startup-friendly methodology designed for speed, agility, and
              quality
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: "Discovery",
                description: "We analyze your requirements and define project scope.",
              },
              {
                icon: Palette,
                title: "Design",
                description: "Wireframes, prototypes, and design systems tailored for you.",
              },
              {
                icon: Server,
                title: "Development",
                description: "Agile sprints delivering continuous improvements.",
              },
              {
                icon: Zap,
                title: "Launch",
                description: "Testing, deployment, and ongoing support post-launch.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="text-center bg-card/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div> */}
          <Workflow />
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary-600 to-accent-emerald relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:24px_24px]"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6 text-white">
              Ready to Get Started ?
            </h2>
            <p className="text-xl lg:text-2xl text-primary-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss your project and craft a tailored solution for your
              business.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="text-lg px-10 py-4 bg-white text-primary-600 hover:bg-primary-50 hover:text-primary-700 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Link href="/contact">Get Free Quote</Link>
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

const Workflow = () => {
  const steps = [
    {
      icon: Globe,
      title: "Discovery",
      desc: "Understand your vision and define scope.",
    },
    {
      icon: Palette,
      title: "Design",
      desc: "Create wireframes, prototypes, and polished UI.",
    },
    {
      icon: Server,
      title: "Development",
      desc: "Agile sprints with weekly demos.",
    },
    {
      icon: Zap,
      title: "Launch",
      desc: "Deploy, monitor, and support growth.",
    },
  ];

  return (
    <section className="">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border transform -translate-x-1/2" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLeft = i % 2 === 0;

            return (
              <AnimatedCard key={i}>
                <div
                  className={`relative flex items-center mb-12 ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Dot on center line */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background z-10 md:hidden" />
                  {/* arrow */}

                  {/* Card */}
                  <div
                    className={`absolute -rotate-40 ${
                      isLeft ? "left-75" : "right-75"
                    } skew-20 w-8 h-8 bg-white hidden md:block`}
                  ></div>
                  <div
                    className={`bg-white w-80 p-6 border border-secondary-200 hover:border-primary-300 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 relative`}
                  >
                    <div className="flex items-center mb-3 space-x-3">
                      <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-lg">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-primary font-semibold">
                        Step {i + 1}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground z-2 text-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
