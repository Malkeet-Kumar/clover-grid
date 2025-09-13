import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import {
  Award,
  CheckCircle,
  Clock,
  Eye,
  Globe,
  Heart,
  Lightbulb,
  ZapIcon as LightningBoltIcon,
  Rocket,
  RocketIcon,
  Shield,
  Star,
  Target,
  ThumbsUpIcon,
  Users,
  UsersIcon,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { getTeamMembers, teamMembers } from "@/lib";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for perfection in every project, delivering solutions that exceed expectations and set new industry standards.",
    color: "primary",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with our clients as partners, ensuring transparent communication and shared success throughout every project.",
    color: "accent-emerald",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay ahead of technology trends to provide cutting-edge solutions that give our clients competitive advantages.",
    color: "accent-teal",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "Our clients trust us to deliver on time, on budget, and with the highest quality standards, every single time.",
    color: "accent-lime",
  },
];

const stats = [
  { number: "200+", label: "Projects Completed", icon: Rocket },
  { number: "50+", label: "Happy Clients", icon: Heart },
  { number: "10+", label: "Years Experience", icon: Award },
  { number: "24/7", label: "Support Available", icon: Clock },
];

const achievements = [
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Serving clients across 15+ countries worldwide",
    metric: "15+ Countries",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "Average project completion 30% faster than industry standard",
    metric: "30% Faster",
  },
  {
    icon: Award,
    title: "Quality Assured",
    desc: "99.9% bug-free delivery rate with rigorous testing",
    metric: "99.9% Quality",
  },
  {
    icon: Star,
    title: "5-Star Rated",
    desc: "Consistently rated 4.9/5 by our satisfied clients",
    metric: "4.9/5 Rating",
  },
];

export default async function AboutPage() {
  const teamMembers = await getTeamMembers(true);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Enhanced */}
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
                <Heart className="h-4 w-4" />
                Our Story
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              About{" "}
              <span className="text-primary bg-gradient-to-r from-primary-600 to-accent-emerald bg-clip-text text-transparent">
                SARU CODER
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-secondary-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              We're a passionate team of technology experts dedicated to
              transforming businesses through innovative IT solutions,
              exceptional service, and genuine partnership.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                asChild
                className="text-lg px-10 py-4 bg-primary hover:bg-primary-600 shadow-lg shadow-primary-500/25"
              >
                <Link href="/contact">Work With Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-10 py-4 border-2 border-secondary-200 hover:border-primary-300 hover:bg-primary-50 text-secondary-700 hover:text-primary-700"
              >
                <Link href="/portfolio">See Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Enhanced */}
      <section className="py-24 bg-secondary-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Our Foundation
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Mission & Vision
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              The driving forces behind everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="group relative bg-white border border-secondary-200 hover:border-primary-300 rounded-3xl p-10 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-accent-emerald/0 group-hover:from-primary-50/50 group-hover:to-accent-emerald/20 rounded-3xl transition-all duration-300" />

              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-primary-100 group-hover:bg-primary-200 rounded-2xl flex items-center justify-center transition-colors duration-300">
                    <Target className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
                    Our Mission
                  </h3>
                </div>
                <p className="text-secondary-600 leading-relaxed text-md">
                  To empower businesses of all sizes with cutting-edge
                  technology solutions that drive growth, improve efficiency,
                  and create competitive advantages. We believe that every
                  organization deserves access to world-class IT services that
                  can transform their operations and unlock their full
                  potential.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative bg-white border border-secondary-200 hover:border-primary-300 rounded-3xl p-10 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-emerald/0 to-accent-teal/0 group-hover:from-accent-emerald/20 group-hover:to-accent-teal/20 rounded-3xl transition-all duration-300" />

              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-accent-emerald/10 group-hover:bg-accent-emerald/20 rounded-2xl flex items-center justify-center transition-colors duration-300">
                    <Eye className="h-8 w-8 text-accent-emerald" />
                  </div>
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
                    Our Vision
                  </h3>
                </div>
                <p className="text-secondary-600 leading-relaxed text-md">
                  To be the leading technology partner for businesses worldwide,
                  recognized for our innovation, reliability, and commitment to
                  client success. We envision a future where technology
                  seamlessly integrates with business processes to create
                  extraordinary user experiences and measurable results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-emerald relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:22px_22px]"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
              <span>Small Wins, Big Impact</span>
            </h2>
            <p className="text-lg text-primary-100 max-w-xl mx-auto">
              As a startup, we celebrate every milestone that helps us grow with
              our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                number: "25+",
                label: "Projects Launched",
                icon: RocketIcon,
              },
              {
                number: "10+",
                label: "Happy Clients",
                icon: UsersIcon,
              },
              {
                number: "95%",
                label: "Positive Feedback",
                icon: ThumbsUpIcon,
              },
              {
                number: "2 Weeks",
                label: "Avg. MVP Delivery",
                icon: LightningBoltIcon,
              },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                  <stat.icon className="h-7 w-7 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-primary-100 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values - Enhanced */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Core Values
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company
              culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white border border-secondary-200 hover:border-primary-300 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-accent-emerald/0 group-hover:from-primary-50/50 group-hover:to-accent-emerald/20 rounded-2xl transition-all duration-300" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary-100 group-hover:bg-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                    <value.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-secondary-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Enhanced */}
      <section className="py-24 bg-secondary-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent-emerald/10 text-accent-emerald text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Meet Our Experts
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Experienced professionals passionate about delivering exceptional
              results and driving innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index: number) => (
              <div
                key={index}
                className="group relative bg-white border border-secondary-200 hover:border-primary-300 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-2"
              >
                <div className="p-8 text-center">
                  <div className="relative w-28 h-28 mx-auto mb-6">
                    <div className="w-full h-full rounded-full overflow-hidden bg-secondary-100 border-4 border-primary-100 group-hover:border-primary-200 transition-colors duration-300">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    {/* Status indicator */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary-500 border-4 border-white rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-foreground mb-1 group-hover:text-primary-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-secondary-600 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Expertise tags */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map(
                      (skill: string, skillIndex: number) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="max-w-3xl mb-16">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
                Why Choose Us
              </span>
            </div>

            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Why Businesses <span className="text-primary">Choose Us</span>
            </h2>

            <p className="text-xl text-secondary-600 leading-relaxed">
              We combine deep technical expertise with a client-first approach
              to deliver solutions that truly make a difference in your business
              operations and growth.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl text-left">
            {[
              {
                text: "Proven track record with 200+ successful projects",
                desc: "From startups to Fortune 500 companies across various industries",
              },
              {
                text: "Expert team with diverse technical backgrounds",
                desc: "Senior developers, architects, and consultants with specialized skills",
              },
              {
                text: "Agile development methodology for faster delivery",
                desc: "Iterative approach ensuring quick deployment and continuous improvement",
              },
              {
                text: "Transparent communication and regular updates",
                desc: "Daily standups, weekly reports, and real-time project visibility",
              },
              {
                text: "Comprehensive post-launch support and maintenance",
                desc: "24/7 monitoring, regular updates, and dedicated support team",
              },
              {
                text: "Competitive pricing with no hidden costs",
                desc: "Transparent pricing model with detailed project breakdown",
              },
              // 🚀 Startup-friendly extras
              {
                text: "Scalable solutions for growing startups",
                desc: "We design systems that evolve as your company expands",
              },
              {
                text: "Fast MVP development",
                desc: "Quickly test ideas in the market with lean, high-quality prototypes",
              },
              {
                text: "Dedicated guidance for early-stage businesses",
                desc: "We help startups avoid pitfalls with mentorship and proven strategies",
              },
              {
                text: "Access to our expert network",
                desc: "Leverage our connections to accelerate partnerships and growth",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 rounded-xl hover:bg-primary-50/50 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-foreground font-semibold text-lg mb-1">
                    {item.text}
                  </div>
                  <div className="text-secondary-600 text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-primary-600 to-accent-emerald relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:24px_24px]"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6 text-white">
              Ready to Work Together?
            </h2>
            <p className="text-xl lg:text-2xl text-primary-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can help transform your business with
              innovative technology solutions tailored to your specific needs
              and goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="text-lg px-10 py-4 bg-white text-primary-600 hover:bg-primary-50 hover:text-primary-700 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-10 py-4 border-2 border-white/30 hover:border-white text-white hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>

            <div className="mt-12 text-primary-100 text-sm flex flex-row items-center justify-center gap-2">
              <span>
                <RocketIcon className="w-4" />
              </span>
              <span>Free consultation • Expert advice • Custom solutions</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const Achivements = ({ achievements }: { achievements: any[] }) => (
  <div className="grid grid-cols-2 gap-6">
    {achievements.map((item, index) => (
      <div
        key={index}
        className="group relative bg-white border border-secondary-200 hover:border-primary-300 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-accent-emerald/0 group-hover:from-primary-50/30 group-hover:to-accent-emerald/10 rounded-2xl transition-all duration-300" />

        <div className="relative z-10">
          <div className="w-14 h-14 bg-primary-100 group-hover:bg-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
            <item.icon className="h-7 w-7 text-primary-600" />
          </div>
          <div className="text-2xl font-bold text-primary-600 mb-2">
            {item.metric}
          </div>
          <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
          <p className="text-sm text-secondary-600 leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
);
