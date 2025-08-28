import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  MapPin,
  Clock,
  DollarSign,
  Heart,
  Coffee,
  Zap,
  Shield,
  GraduationCap,
  Plane,
  ArrowRight,
  Building,
} from "lucide-react"

const jobOpenings = [
  {
    id: "senior-fullstack-developer",
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description:
      "Join our engineering team to build cutting-edge web applications using React, Next.js, and Node.js. You'll work on challenging projects for Fortune 500 clients.",
    requirements: [
      "5+ years of full-stack development experience",
      "Expert knowledge of React, Next.js, and Node.js",
      "Experience with cloud platforms (AWS, Vercel)",
      "Strong problem-solving and communication skills",
    ],
    posted: "2024-01-10",
  },
  {
    id: "mobile-developer",
    title: "Mobile App Developer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description:
      "Develop innovative mobile applications using React Native and Flutter. Work with cross-functional teams to deliver exceptional user experiences.",
    requirements: [
      "4+ years of mobile development experience",
      "Proficiency in React Native or Flutter",
      "Experience with native iOS/Android development",
      "Knowledge of mobile UI/UX best practices",
    ],
    posted: "2024-01-08",
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    location: "San Francisco, CA / Hybrid",
    type: "Full-time",
    salary: "$90,000 - $130,000",
    description:
      "Create beautiful, user-centered designs for web and mobile applications. Collaborate with developers and product managers to bring ideas to life.",
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma, Adobe Creative Suite",
      "Strong portfolio demonstrating design thinking",
      "Experience with design systems and prototyping",
    ],
    posted: "2024-01-05",
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    salary: "$130,000 - $170,000",
    description:
      "Build and maintain scalable infrastructure using AWS, Docker, and Kubernetes. Implement CI/CD pipelines and ensure system reliability.",
    requirements: [
      "4+ years of DevOps/Infrastructure experience",
      "Expert knowledge of AWS, Docker, Kubernetes",
      "Experience with Infrastructure as Code (Terraform)",
      "Strong automation and scripting skills",
    ],
    posted: "2024-01-03",
  },
]

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision insurance plus wellness programs",
  },
  {
    icon: DollarSign,
    title: "Competitive Salary",
    description: "Market-leading compensation with equity options and performance bonuses",
  },
  {
    icon: Plane,
    title: "Flexible PTO",
    description: "Unlimited paid time off and flexible work arrangements",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "$3,000 annual budget for conferences, courses, and professional development",
  },
  {
    icon: Coffee,
    title: "Great Perks",
    description: "Free meals, snacks, and beverages in our modern office spaces",
  },
  {
    icon: Shield,
    title: "Work-Life Balance",
    description: "Flexible hours, remote work options, and mental health support",
  },
]

const cultureValues = [
  {
    title: "Innovation First",
    description: "We embrace new technologies and encourage creative problem-solving",
  },
  {
    title: "Collaborative Spirit",
    description: "We believe the best solutions come from diverse teams working together",
  },
  {
    title: "Continuous Learning",
    description: "We invest in our team's growth and encourage knowledge sharing",
  },
  {
    title: "Client Success",
    description: "We're passionate about delivering exceptional results for our clients",
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">Join Our Amazing Team</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Build the future of technology with a passionate team of innovators. We're looking for talented
              individuals who share our vision of transforming businesses through exceptional IT solutions.
            </p>
            <Button size="lg" asChild>
              <Link href="#openings">
                View Open Positions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Culture & Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We've built a culture that values innovation, collaboration, and personal growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">Benefits & Perks</h2>
            <p className="text-xl text-muted-foreground">We take care of our team so they can do their best work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground">Find your next career opportunity with us</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-heading mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Building className="h-4 w-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="h-4 w-4" />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary">Posted {new Date(job.posted).toLocaleDateString()}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{job.description}</p>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                          <span className="text-muted-foreground text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button asChild>
                      <Link href={`/careers/${job.id}`}>
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" className="bg-transparent">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see a position that fits? We're always looking for talent!
            </p>
            <Button variant="outline" size="lg" className="bg-transparent">
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">Join Our Growing Team</h2>
            <p className="text-xl text-muted-foreground">We're scaling fast and looking for exceptional talent</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Team Members" },
              { number: "15+", label: "Countries" },
              { number: "4.9/5", label: "Employee Rating" },
              { number: "95%", label: "Retention Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Ready to Make an Impact?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join a team that's passionate about technology, innovation, and making a difference in the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="#openings">Browse Open Positions</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
