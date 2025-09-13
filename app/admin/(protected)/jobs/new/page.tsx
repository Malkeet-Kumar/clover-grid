"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Save, X } from "lucide-react"
import { useState } from "react"

export default function NewJobPostPage() {
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    location: "",
    type: "full-time" as "full-time" | "part-time" | "contract" | "remote",
    description: "",
    requirements: [] as string[],
    responsibilities: [] as string[],
    skills: [] as string[],
    experience: "",
    salary: {
      min: 0,
      max: 0,
      currency: "USD",
    },
    benefits: [] as string[],
    published: false,
    featured: false,
  })

  const [newRequirement, setNewRequirement] = useState("")
  const [newResponsibility, setNewResponsibility] = useState("")
  const [newSkill, setNewSkill] = useState("")
  const [newBenefit, setNewBenefit] = useState("")

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const addToArray = (field: string, value: string, setter: (value: string) => void) => {
    if (value.trim() && !formData[field as keyof typeof formData].includes(value.trim())) {
      setFormData((prev) => ({ ...prev, [field]: [...(prev[field as keyof typeof prev] as string[]), value.trim()] }))
      setter("")
    }
  }

  const removeFromArray = (field: string, valueToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: (prev[field as keyof typeof prev] as string[]).filter((item) => item !== valueToRemove),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitting job post:", formData)
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <Navigation />

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/admin/jobs">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Jobs
                </Link>
              </Button>
              <div>
                <h1 className="font-heading text-3xl font-bold text-foreground">Create New Job Post</h1>
                <p className="text-muted-foreground">Post a new career opportunity</p>
              </div>
            </div>
            <Button onClick={handleSubmit}>
              <Save className="h-4 w-4 mr-2" />
              Save Job
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Job Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="title">Job Title</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => handleInputChange("title", e.target.value)}
                        placeholder="Senior Full Stack Developer"
                        className="mt-1"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="department">Department</Label>
                        <Input
                          id="department"
                          value={formData.department}
                          onChange={(e) => handleInputChange("department", e.target.value)}
                          placeholder="Engineering"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={formData.location}
                          onChange={(e) => handleInputChange("location", e.target.value)}
                          placeholder="Remote / San Francisco"
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="type">Job Type</Label>
                      <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full-time">Full-time</SelectItem>
                          <SelectItem value="part-time">Part-time</SelectItem>
                          <SelectItem value="contract">Contract</SelectItem>
                          <SelectItem value="remote">Remote</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="description">Job Description</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        placeholder="Describe the role and what the candidate will be doing..."
                        className="mt-1"
                        rows={6}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Requirements */}
                <Card>
                  <CardHeader>
                    <CardTitle>Requirements</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex space-x-2">
                      <Input
                        value={newRequirement}
                        onChange={(e) => setNewRequirement(e.target.value)}
                        placeholder="Add requirement..."
                        onKeyPress={(e) =>
                          e.key === "Enter" &&
                          (e.preventDefault(), addToArray("requirements", newRequirement, setNewRequirement))
                        }
                      />
                      <Button
                        type="button"
                        onClick={() => addToArray("requirements", newRequirement, setNewRequirement)}
                        size="sm"
                      >
                        Add
                      </Button>
                    </div>
                    <div className="space-y-2">
                      {formData.requirements.map((req, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                          <span className="text-sm">{req}</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromArray("requirements", req)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Job Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="published">Published</Label>
                      <Switch
                        id="published"
                        checked={formData.published}
                        onCheckedChange={(checked) => handleInputChange("published", checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="featured">Featured</Label>
                      <Switch
                        id="featured"
                        checked={formData.featured}
                        onCheckedChange={(checked) => handleInputChange("featured", checked)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="experience">Experience Level</Label>
                      <Input
                        id="experience"
                        value={formData.experience}
                        onChange={(e) => handleInputChange("experience", e.target.value)}
                        placeholder="5+ years"
                        className="mt-1"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Salary Range</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label htmlFor="salaryMin">Min</Label>
                        <Input
                          id="salaryMin"
                          type="number"
                          value={formData.salary.min}
                          onChange={(e) =>
                            handleInputChange("salary", { ...formData.salary, min: Number.parseInt(e.target.value) })
                          }
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="salaryMax">Max</Label>
                        <Input
                          id="salaryMax"
                          type="number"
                          value={formData.salary.max}
                          onChange={(e) =>
                            handleInputChange("salary", { ...formData.salary, max: Number.parseInt(e.target.value) })
                          }
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Skills</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex space-x-2">
                      <Input
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        placeholder="Add skill..."
                        onKeyPress={(e) =>
                          e.key === "Enter" && (e.preventDefault(), addToArray("skills", newSkill, setNewSkill))
                        }
                      />
                      <Button type="button" onClick={() => addToArray("skills", newSkill, setNewSkill)} size="sm">
                        Add
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {formData.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="flex items-center space-x-1">
                          <span>{skill}</span>
                          <button type="button" onClick={() => removeFromArray("skills", skill)} className="ml-1">
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}
