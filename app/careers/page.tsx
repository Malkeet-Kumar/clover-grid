import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
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
  Users,
  Target,
  Lightbulb,
  Award,
  Globe,
  TrendingUp,
  Star,
  Briefcase,
  WorkflowIcon,
  Rocket,
  Sparkles,
  JapaneseYen,
  IndianRupee,
} from "lucide-react";
import { getJobPosts } from "@/lib";
import { formatDate } from "date-fns";

const jobOpenings = [
  {
    id: "senior-fullstack-developer",
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description:
      "Join our engineering team to build cutting-edge web applications using React, Next.js, and Node.js. You'll work on challenging projects for Fortune 500 clients and contribute to our innovative tech stack.",
    requirements: [
      "5+ years of full-stack development experience",
      "Expert knowledge of React, Next.js, and Node.js",
      "Experience with cloud platforms (AWS, Vercel)",
      "Strong problem-solving and communication skills",
    ],
    posted: "2024-01-10",
    featured: true,
  },
  {
    id: "mobile-developer",
    title: "Mobile App Developer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description:
      "Develop innovative mobile applications using React Native and Flutter. Work with cross-functional teams to deliver exceptional user experiences across iOS and Android platforms.",
    requirements: [
      "4+ years of mobile development experience",
      "Proficiency in React Native or Flutter",
      "Experience with native iOS/Android development",
      "Knowledge of mobile UI/UX best practices",
    ],
    posted: "2024-01-08",
    featured: false,
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    location: "San Francisco, CA / Hybrid",
    type: "Full-time",
    salary: "$90,000 - $130,000",
    description:
      "Create beautiful, user-centered designs for web and mobile applications. Collaborate with developers and product managers to bring innovative ideas to life through exceptional design.",
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma, Adobe Creative Suite",
      "Strong portfolio demonstrating design thinking",
      "Experience with design systems and prototyping",
    ],
    posted: "2024-01-05",
    featured: true,
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    salary: "$130,000 - $170,000",
    description:
      "Build and maintain scalable infrastructure using AWS, Docker, and Kubernetes. Implement robust CI/CD pipelines and ensure system reliability at enterprise scale.",
    requirements: [
      "4+ years of DevOps/Infrastructure experience",
      "Expert knowledge of AWS, Docker, Kubernetes",
      "Experience with Infrastructure as Code (Terraform)",
      "Strong automation and scripting skills",
    ],
    posted: "2024-01-03",
    featured: false,
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description:
      "Comprehensive health, dental, and vision insurance plus wellness programs and mental health support",
    color: "primary",
  },
  {
    icon: DollarSign,
    title: "Competitive Salary",
    description:
      "Market-leading compensation with equity options, performance bonuses, and annual reviews",
    color: "accent-emerald",
  },
  {
    icon: Plane,
    title: "Flexible PTO",
    description:
      "Unlimited paid time off, flexible work arrangements, and sabbatical opportunities",
    color: "accent-teal",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description:
      "$3,000 annual budget for conferences, courses, certifications, and professional development",
    color: "accent-lime",
  },
  {
    icon: Coffee,
    title: "Great Perks",
    description:
      "Free meals, snacks, beverages, gym membership, and modern office spaces with amenities",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Work-Life Balance",
    description:
      "Flexible hours, remote work options, parental leave, and dedicated time for personal projects",
    color: "accent-emerald",
  },
];

const cultureValues = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We embrace new technologies and encourage creative problem-solving to stay ahead of the curve",
    color: "primary",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description:
      "We believe the best solutions come from diverse teams working together towards common goals",
    color: "accent-emerald",
  },
  {
    icon: TrendingUp,
    title: "Continuous Learning",
    description:
      "We invest in our team's growth and encourage knowledge sharing across all departments",
    color: "accent-teal",
  },
  {
    icon: Target,
    title: "Client Success",
    description:
      "We're passionate about delivering exceptional results that drive our clients' business forward",
    color: "accent-lime",
  },
];
const teamStats = [
  {
    icon: Rocket,
    number: "20+",
    label: "Projects Launched",
    desc: "From MVPs to full-scale apps",
  },
  {
    icon: Users,
    number: "10+",
    label: "Happy Clients",
    desc: "Growing with startups & founders",
  },
  {
    icon: Sparkles,
    number: "2 Weeks",
    label: "Avg. MVP Delivery",
    desc: "Quick ideas into real products",
  },
  {
    icon: Heart,
    number: "100%",
    label: "Passion Driven",
    desc: "We love what we build",
  },
];

export default async function CareersPage() {
  const jobOpenings = await getJobPosts({ featured: true });
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Enhanced */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-background to-secondary-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,rgb(0,0,0)_1px,transparent_0)] bg-[length:24px_24px]" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-200 bg-primary-50 text-primary-700 text-sm font-medium">
                <Briefcase className="h-4 w-4" />
                Join Our Team
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Build the Future with{" "}
              <span className="text-primary bg-gradient-to-r from-primary-600 to-accent-emerald bg-clip-text text-transparent">
                Amazing People
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-secondary-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Build the future of technology with a passionate team of
              innovators. We're looking for talented individuals who share our
              vision of transforming businesses through exceptional IT
              solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                asChild
                className="text-lg px-10 py-4 bg-primary hover:bg-primary-600 shadow-lg shadow-primary-500/25"
              >
                <Link href="#openings">
                  View Open Positions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-10 py-4 border-2 border-secondary-200 hover:border-primary-300 hover:bg-primary-50 text-secondary-700 hover:text-primary-700"
              >
                <Link href="#culture">Learn About Our Culture</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture - Enhanced */}
      <section id="culture" className="py-24 bg-secondary-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Our Culture
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Culture & Values
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We've built a culture that values innovation, collaboration, and
              personal growth where every team member can thrive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white border border-secondary-200 hover:border-primary-300 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-accent-emerald/0 group-hover:from-primary-50/50 group-hover:to-accent-emerald/20 rounded-2xl transition-all duration-300" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary-100 group-hover:bg-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                    <value.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-4 group-hover:text-primary-700 transition-colors">
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

      {/* Benefits - Enhanced */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent-emerald/10 text-accent-emerald text-sm font-medium mb-4">
              Benefits & Perks
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
              We Take Care of Our Team
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive benefits and perks designed to support your
              professional growth and personal well-being
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-white border border-secondary-200 hover:border-primary-300 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-accent-emerald/0 group-hover:from-primary-50/30 group-hover:to-accent-emerald/10 rounded-2xl transition-all duration-300" />

                <div className="relative z-10 p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-primary-100 group-hover:bg-primary-200 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <benefit.icon className="h-7 w-7 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-primary-700 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-secondary-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions - Enhanced */}
      <section id="openings" className="py-24 bg-secondary-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Open Positions
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Join Our Growing Team
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Find your next career opportunity with us and help shape the
              future of technology
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {jobOpenings.map((job) => (
              <div
                key={job._id}
                className="group relative bg-white border border-secondary-200 hover:border-primary-300 rounded-3xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1"
              >
                {job.featured && (
                  <div className="absolute -top-3 left-8">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">
                      <Star className="h-3 w-3" />
                      Featured
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-accent-emerald/0 group-hover:from-primary-50/30 group-hover:to-accent-emerald/10 rounded-3xl transition-all duration-300" />

                <div className="relative z-10 p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="font-heading text-2xl font-bold text-foreground group-hover:text-primary-700 transition-colors">
                          {job.title}
                        </h3>
                        <Badge
                          variant="secondary"
                          className="bg-primary-100 text-primary-700 hover:bg-primary-200"
                        >
                          {job.department}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap items-center gap-6 text-sm text-secondary-600 mb-6">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <JapaneseYen
                            className={
                              job.salary?.currency === "JPY"
                                ? "w-4 h-4"
                                : "hidden"
                            }
                          />
                          <DollarSign
                            className={
                              job.salary?.currency === "USD"
                                ? "w-4 h-4"
                                : "hidden"
                            }
                          />
                          <IndianRupee
                            className={
                              job.salary?.currency === "INR"
                                ? "w-4 h-4"
                                : "hidden"
                            }
                          />
                          <span>
                            {job.salary?.min} - {job.salary?.max}{" "}
                          </span>
                        </div>
                      </div>

                      <p className="text-secondary-600 mb-6 leading-relaxed">
                        {job.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3 text-lg">
                          Key Requirements:
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {job.requirements.map((req, index) => (
                            <div
                              key={index}
                              className="flex items-start space-x-3"
                            >
                              <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0 mt-2" />
                              <span className="text-secondary-600 text-sm leading-relaxed">
                                {req}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:w-48">
                      <div className="text-center mb-4">
                        <div className="text-xs text-secondary-500 mb-1">
                          Posted
                        </div>
                        <div className="text-sm font-medium text-secondary-700">
                          {formatDate(job.createdAt,"d-MMM-yy")}
                        </div>
                      </div>

                      <Button
                        asChild
                        className="bg-primary hover:bg-primary-600 shadow-lg shadow-primary-500/25"
                      >
                        <Link href={job.applyUrl || `/careers/${job._id}`}>
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>

                      <Button
                        variant="outline"
                        className="border-2 border-secondary-200 hover:border-primary-300 hover:bg-primary-50 text-secondary-700 hover:text-primary-700"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-white border border-secondary-200 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                Don't See the Perfect Role?
              </h3>
              <p className="text-secondary-600 mb-6">
                We're always looking for exceptional talent! Send us your resume
                and we'll keep you in mind for future opportunities.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-secondary-300 hover:border-primary-400 text-secondary-700 hover:text-primary-600 hover:bg-primary-50"
              >
                Send Us Your Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-primary-600 to-accent-emerald relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:24px_24px]"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
              Growing Together
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              We're scaling fast and looking for exceptional talent to join our
              mission
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-100 font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-primary-200 text-sm">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
                Ready to Start?
              </span>
            </div>

            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ready to Make an Impact?
            </h2>

            <p className="text-xl text-secondary-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join a team that's passionate about technology, innovation, and
              making a real difference in the world. Your next career adventure
              starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                asChild
                className="text-lg px-10 py-4 bg-primary hover:bg-primary-600 shadow-lg shadow-primary-500/25"
              >
                <Link href="#openings">
                  Browse Open Positions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-10 py-4 border-2 border-secondary-200 hover:border-primary-300 hover:bg-primary-50 text-secondary-700 hover:text-primary-700"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>

            <div className="mt-12 text-secondary-600 text-sm">
              <WorkflowIcon className="inline-block h-4 w-4 mr-2 text-secondary-400" />
              <span>
                Equal opportunity employer • Remote-friendly • Competitive
                benefits
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
