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
import Link from "next/link"
import { ArrowLeft, Save, X } from "lucide-react"
import { useState } from "react"

export default function NewPricingPlanPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    currency: "USD",
    billing: "one-time" as "monthly" | "yearly" | "one-time",
    features: [] as string[],
    limitations: [] as string[],
    popular: false,
    ctaText: "Get Started",
    ctaUrl: "",
    category: "web" as "web" | "mobile" | "saas" | "support",
    published: false,
  })

  const [newFeature, setNewFeature] = useState("")
  const [newLimitation, setNewLimitation] = useState("")

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const addFeature = () => {
    if (newFeature.trim() && !formData.features.includes(newFeature.trim())) {
      setFormData((prev) => ({ ...prev, features: [...prev.features, newFeature.trim()] }))
      setNewFeature("")
    }
  }

  const removeFeature = (featureToRemove: string) => {
    setFormData((prev) => ({ ...prev, features: prev.features.filter((feature) => feature !== featureToRemove) }))
  }

  const addLimitation = () => {
    if (newLimitation.trim() && !formData.limitations.includes(newLimitation.trim())) {
      setFormData((prev) => ({ ...prev, limitations: [...prev.limitations, newLimitation.trim()] }))
      setNewLimitation("")
    }
  }

  const removeLimitation = (limitationToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      limitations: prev.limitations.filter((limitation) => limitation !== limitationToRemove),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitting pricing plan:", formData)
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
                <Link href="/admin/pricing">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Pricing
                </Link>
              </Button>
              <div>
                <h1 className="font-heading text-3xl font-bold text-foreground">Create New Pricing Plan</h1>
                <p className="text-muted-foreground">Add a new service package</p>
              </div>
            </div>
            <Button onClick={handleSubmit}>
              <Save className="h-4 w-4 mr-2" />
              Save Plan
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Plan Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="name">Plan Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Professional Website"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        placeholder="Perfect for growing businesses..."
                        className="mt-1"
                        rows={3}
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="price">Price</Label>
                        <Input
                          id="price"
                          type="number"
                          value={formData.price}
                          onChange={(e) => handleInputChange("price", Number.parseInt(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="currency">Currency</Label>
                        <Select
                          value={formData.currency}
                          onValueChange={(value) => handleInputChange("currency", value)}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="USD">USD</SelectItem>
                            <SelectItem value="EUR">EUR</SelectItem>
                            <SelectItem value="GBP">GBP</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="billing">Billing</Label>
                        <Select value={formData.billing} onValueChange={(value) => handleInputChange("billing", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="yearly">Yearly</SelectItem>
                            <SelectItem value="one-time">One-time</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Features */}
                <Card>
                  <CardHeader>
                    <CardTitle>Features</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex space-x-2">
                      <Input
                        value={newFeature}
                        onChange={(e) => setNewFeature(e.target.value)}
                        placeholder="Add feature..."
                        onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addFeature())}
                      />
                      <Button type="button" onClick={addFeature} size="sm">
                        Add
                      </Button>
                    </div>
                    <div className="space-y-2">
                      {formData.features.map((feature, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                          <span className="text-sm">{feature}</span>
                          <Button type="button" variant="ghost" size="sm" onClick={() => removeFeature(feature)}>
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Limitations */}
                <Card>
                  <CardHeader>
                    <CardTitle>Limitations (Optional)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex space-x-2">
                      <Input
                        value={newLimitation}
                        onChange={(e) => setNewLimitation(e.target.value)}
                        placeholder="Add limitation..."
                        onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addLimitation())}
                      />
                      <Button type="button" onClick={addLimitation} size="sm">
                        Add
                      </Button>
                    </div>
                    <div className="space-y-2">
                      {formData.limitations.map((limitation, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                          <span className="text-sm">{limitation}</span>
                          <Button type="button" variant="ghost" size="sm" onClick={() => removeLimitation(limitation)}>
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
                    <CardTitle>Plan Settings</CardTitle>
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
                      <Label htmlFor="popular">Popular</Label>
                      <Switch
                        id="popular"
                        checked={formData.popular}
                        onCheckedChange={(checked) => handleInputChange("popular", checked)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web">Web</SelectItem>
                          <SelectItem value="mobile">Mobile</SelectItem>
                          <SelectItem value="saas">SaaS</SelectItem>
                          <SelectItem value="support">Support</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Call to Action</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="ctaText">Button Text</Label>
                      <Input
                        id="ctaText"
                        value={formData.ctaText}
                        onChange={(e) => handleInputChange("ctaText", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="ctaUrl">Button URL</Label>
                      <Input
                        id="ctaUrl"
                        value={formData.ctaUrl}
                        onChange={(e) => handleInputChange("ctaUrl", e.target.value)}
                        placeholder="/quote?plan=professional"
                        className="mt-1"
                      />
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
