"use client";

import type React from "react";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calculator, Clock, Send, TextQuote, Users, Zap } from "lucide-react";
import { useState } from "react";

const projectTypes = [
  "Web Application",
  "Mobile App (iOS/Android)",
  "E-commerce Platform",
  "SaaS Solution",
  "API Development",
  "Cloud Migration",
  "AI/ML Integration",
  "UI/UX Design",
  "Other",
];

const budgetRanges = [
  "Under $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
  "I'm not sure",
];

const timelines = [
  "ASAP (Rush project)",
  "1-2 months",
  "3-6 months",
  "6-12 months",
  "12+ months",
  "Flexible",
];

const services = [
  { id: "web-dev", label: "Web Development" },
  { id: "mobile-dev", label: "Mobile App Development" },
  { id: "backend", label: "Backend & Database" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "design", label: "UI/UX Design" },
  { id: "saas", label: "SaaS Development" },
  { id: "ai", label: "AI & Automation" },
  { id: "support", label: "Maintenance & Support" },
];

export default function QuotePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    // Contact Info
    name: "",
    email: "",
    phone: "",
    company: "",

    // Project Details
    projectType: "",
    projectTitle: "",
    projectDescription: "",
    selectedServices: [] as string[],

    // Requirements
    budget: "",
    timeline: "",
    teamSize: "",

    // Additional Info
    hasExistingSystem: "",
    technicalRequirements: "",
    additionalInfo: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Quote request submitted!",
      description:
        "We'll prepare a detailed proposal and get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      projectTitle: "",
      projectDescription: "",
      selectedServices: [],
      budget: "",
      timeline: "",
      teamSize: "",
      hasExistingSystem: "",
      technicalRequirements: "",
      additionalInfo: "",
    });
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleServiceToggle = (serviceId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: checked
        ? [...prev.selectedServices, serviceId]
        : prev.selectedServices.filter((id) => id !== serviceId),
    }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
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
                <TextQuote className="h-4 w-4" />
                Get Quote
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Get Your Project{" "}
              <span className="text-primary bg-gradient-to-r from-primary-600 to-accent-emerald bg-clip-text text-transparent">
                Quote
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-secondary-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Tell us about your project and we'll provide you with a detailed
              proposal including timeline, cost breakdown, and technical
              approach.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-6 justify-center items-center"></div> */}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-secondary-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <Card className="border-border bg-primary-foreground">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading flex items-center">
                      <Users className="mr-2 h-5 w-5 text-primary" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company *</Label>
                        <Input
                          id="company"
                          type="text"
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={(e) =>
                            handleInputChange("company", e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Project Details */}
                <Card className="border-border bg-primary-foreground">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading flex items-center">
                      <Zap className="mr-2 h-5 w-5 text-primary" />
                      Project Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="projectType">Project Type *</Label>
                        <Select
                          value={formData.projectType}
                          onValueChange={(value) =>
                            handleInputChange("projectType", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            {projectTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="projectTitle">Project Title *</Label>
                        <Input
                          id="projectTitle"
                          type="text"
                          placeholder="My Awesome Project"
                          value={formData.projectTitle}
                          onChange={(e) =>
                            handleInputChange("projectTitle", e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectDescription">
                        Project Description *
                      </Label>
                      <Textarea
                        id="projectDescription"
                        placeholder="Describe your project goals, target audience, key features, and any specific requirements..."
                        rows={4}
                        value={formData.projectDescription}
                        onChange={(e) =>
                          handleInputChange(
                            "projectDescription",
                            e.target.value
                          )
                        }
                        required
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Services Needed */}
                <Card className="border-border bg-primary-foreground">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading">
                      Services Needed
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Select all services that apply to your project
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <div
                          key={service.id}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={service.id}
                            checked={formData.selectedServices.includes(
                              service.id
                            )}
                            onCheckedChange={(checked) =>
                              handleServiceToggle(
                                service.id,
                                checked as boolean
                              )
                            }
                          />
                          <Label
                            htmlFor={service.id}
                            className="text-sm font-normal"
                          >
                            {service.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Budget & Timeline */}
                <Card className="border-border bg-primary-foreground">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading flex items-center">
                      <Calculator className="mr-2 h-5 w-5 text-primary" />
                      Budget & Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <Label>Project Budget *</Label>
                      <RadioGroup
                        value={formData.budget}
                        onValueChange={(value) =>
                          handleInputChange("budget", value)
                        }
                        className="grid grid-cols-1 md:grid-cols-2 gap-2"
                      >
                        {budgetRanges.map((range) => (
                          <div
                            key={range}
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem
                              value={range}
                              id={`budget-${range}`}
                            />
                            <Label
                              htmlFor={`budget-${range}`}
                              className="text-sm font-normal"
                            >
                              {range}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div className="space-y-3">
                      <Label>Preferred Timeline *</Label>
                      <RadioGroup
                        value={formData.timeline}
                        onValueChange={(value) =>
                          handleInputChange("timeline", value)
                        }
                        className="grid grid-cols-1 md:grid-cols-2 gap-2"
                      >
                        {timelines.map((timeline) => (
                          <div
                            key={timeline}
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem
                              value={timeline}
                              id={`timeline-${timeline}`}
                            />
                            <Label
                              htmlFor={`timeline-${timeline}`}
                              className="text-sm font-normal"
                            >
                              {timeline}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="teamSize">Expected Team Size</Label>
                      <Select
                        value={formData.teamSize}
                        onValueChange={(value) =>
                          handleInputChange("teamSize", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select team size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-2">1-2 developers</SelectItem>
                          <SelectItem value="3-5">3-5 developers</SelectItem>
                          <SelectItem value="6-10">6-10 developers</SelectItem>
                          <SelectItem value="10+">10+ developers</SelectItem>
                          <SelectItem value="not-sure">I'm not sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Information */}
                <Card className="border-border bg-primary-foreground">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading">
                      Additional Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <Label>Do you have an existing system or codebase?</Label>
                      <RadioGroup
                        value={formData.hasExistingSystem}
                        onValueChange={(value) =>
                          handleInputChange("hasExistingSystem", value)
                        }
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="existing-yes" />
                          <Label
                            htmlFor="existing-yes"
                            className="text-sm font-normal"
                          >
                            Yes, we have existing systems
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="existing-no" />
                          <Label
                            htmlFor="existing-no"
                            className="text-sm font-normal"
                          >
                            No, starting from scratch
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="partial"
                            id="existing-partial"
                          />
                          <Label
                            htmlFor="existing-partial"
                            className="text-sm font-normal"
                          >
                            Partially, some components exist
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="technicalRequirements">
                        Technical Requirements
                      </Label>
                      <Textarea
                        id="technicalRequirements"
                        placeholder="Any specific technologies, integrations, compliance requirements, or technical constraints..."
                        rows={3}
                        value={formData.technicalRequirements}
                        onChange={(e) =>
                          handleInputChange(
                            "technicalRequirements",
                            e.target.value
                          )
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo">
                        Additional Information
                      </Label>
                      <Textarea
                        id="additionalInfo"
                        placeholder="Anything else you'd like us to know about your project..."
                        rows={3}
                        value={formData.additionalInfo}
                        onChange={(e) =>
                          handleInputChange("additionalInfo", e.target.value)
                        }
                      />
                    </div>
                  </CardContent>
                </Card>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting Request..."
                  ) : (
                    <>
                      Get My Quote
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* What to Expect */}
              <Card className="border-border bg-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-lg font-heading">
                    What to Expect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">
                        Initial Review
                      </p>
                      <p className="text-muted-foreground text-xs">
                        We'll review your requirements within 24 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">
                        Discovery Call
                      </p>
                      <p className="text-muted-foreground text-xs">
                        30-minute call to discuss your project in detail
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">
                        Detailed Proposal
                      </p>
                      <p className="text-muted-foreground text-xs">
                        Comprehensive proposal with timeline and costs
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="border-border bg-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-lg font-heading">
                    Need Help?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-sm">
                    Have questions about the quote process? We're here to help!
                  </p>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href="mailto:hello@sarucoder.dev">
                        <Send className="mr-2 h-4 w-4" />
                        Email Us
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href="tel:+919813940038">
                        <Clock className="mr-2 h-4 w-4" />
                        Schedule Call
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial */}
              {/* <Card className="border-border bg-primary-foreground bg-primary/5">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground italic mb-3">
                    "We delivered exactly what we needed, on time and
                    within budget. Their quote process was transparent and
                    detailed."
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-muted rounded-full" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Sarah Johnson
                      </p>
                      <p className="text-xs text-muted-foreground">
                        CEO, EcoCommerce
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
