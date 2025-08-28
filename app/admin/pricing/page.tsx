import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Plus, Search, Edit, Trash2, Eye, Star } from "lucide-react"
import { getPricingPlans } from "@/lib/api"

export default async function AdminPricingPage() {
  const pricingPlans = await getPricingPlans()

  return (
    <div className="min-h-screen bg-muted/30">
      <Navigation />

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-2">Pricing Management</h1>
              <p className="text-muted-foreground">Manage pricing plans and service packages</p>
            </div>
            <Button asChild>
              <Link href="/admin/pricing/new">
                <Plus className="h-4 w-4 mr-2" />
                New Plan
              </Link>
            </Button>
          </div>

          {/* Search and Filters */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search plans..." className="pl-10" />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    All Plans
                  </Button>
                  <Button variant="outline" size="sm">
                    Published
                  </Button>
                  <Button variant="outline" size="sm">
                    Popular
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pricing Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <Card key={plan.id} className="hover:shadow-lg transition-shadow relative">
                {plan.popular && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="h-3 w-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={plan.published ? "default" : "secondary"}>
                      {plan.published ? "Published" : "Draft"}
                    </Badge>
                    <Badge variant="outline" className="capitalize">
                      {plan.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-heading">{plan.name}</CardTitle>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                  <div className="mt-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-foreground">${plan.price.toLocaleString()}</span>
                      <span className="text-muted-foreground ml-1">
                        {plan.billing === "monthly" ? "/mo" : plan.billing === "yearly" ? "/yr" : ""}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Features</h4>
                    <ul className="space-y-1">
                      {plan.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="text-xs text-muted-foreground flex items-center">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                      {plan.features.length > 4 && (
                        <li className="text-xs text-muted-foreground">+{plan.features.length - 4} more features</li>
                      )}
                    </ul>
                  </div>
                  <div className="flex items-center space-x-2 pt-4 border-t border-border">
                    <Button variant="ghost" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-1" />
                      Preview
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/admin/pricing/${plan.id}`}>
                        <Edit className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
