import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Target, Eye, Users, Award, TrendingUp, CheckCircle, Star, Globe, Clock, Shield } from "lucide-react"

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "10+ years in tech leadership, former Google engineer with expertise in scaling startups.",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Full-stack architect with deep expertise in cloud infrastructure and AI systems.",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Award-winning designer with 8+ years creating user-centered digital experiences.",
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Senior developer specializing in React, Node.js, and modern web technologies.",
  },
]

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for perfection in every project, delivering solutions that exceed expectations.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients as partners, ensuring transparent communication throughout.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "We stay ahead of technology trends to provide cutting-edge solutions for our clients.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Our clients trust us to deliver on time, on budget, and with the highest quality standards.",
  },
]

const stats = [
  { number: "200+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "10+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About TechFlow Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're a passionate team of technology experts dedicated to transforming businesses through innovative IT
              solutions and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="border-border">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses of all sizes with cutting-edge technology solutions that drive growth, improve
                  efficiency, and create competitive advantages. We believe that every organization deserves access to
                  world-class IT services that can transform their operations and unlock their full potential.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-border">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Eye className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading technology partner for businesses worldwide, recognized for our innovation,
                  reliability, and commitment to client success. We envision a future where technology seamlessly
                  integrates with business processes to create extraordinary user experiences and measurable results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Track Record</h2>
            <p className="text-xl text-muted-foreground">Numbers that speak to our commitment and success</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals passionate about delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Businesses Choose Us
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine deep technical expertise with a client-first approach to deliver solutions that truly make a
                difference.
              </p>

              <div className="space-y-4">
                {[
                  "Proven track record with 200+ successful projects",
                  "Expert team with diverse technical backgrounds",
                  "Agile development methodology for faster delivery",
                  "Transparent communication and regular updates",
                  "Comprehensive post-launch support and maintenance",
                  "Competitive pricing with no hidden costs",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Globe, title: "Global Reach", desc: "Serving clients worldwide" },
                { icon: Clock, title: "Fast Delivery", desc: "Quick turnaround times" },
                { icon: Award, title: "Quality Assured", desc: "Rigorous testing standards" },
                { icon: Star, title: "5-Star Rated", desc: "Excellent client reviews" },
              ].map((item, index) => (
                <Card key={index} className="text-center border-border">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
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
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get in Touch</Link>
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
