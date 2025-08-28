import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Plus, Search, Edit, Trash2, Eye, MapPin, Clock, DollarSign } from "lucide-react"
import { getJobPosts } from "@/lib/api"

export default async function AdminJobsPage() {
  const jobPosts = await getJobPosts()

  return (
    <div className="min-h-screen bg-muted/30">
      <Navigation />

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-2">Job Management</h1>
              <p className="text-muted-foreground">Manage job postings and career opportunities</p>
            </div>
            <Button asChild>
              <Link href="/admin/jobs/new">
                <Plus className="h-4 w-4 mr-2" />
                New Job
              </Link>
            </Button>
          </div>

          {/* Search and Filters */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search jobs..." className="pl-10" />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    All Jobs
                  </Button>
                  <Button variant="outline" size="sm">
                    Published
                  </Button>
                  <Button variant="outline" size="sm">
                    Featured
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Jobs List */}
          <div className="space-y-4">
            {jobPosts.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-heading text-lg font-semibold text-foreground">{job.title}</h3>
                        <Badge variant={job.published ? "default" : "secondary"}>
                          {job.published ? "Published" : "Draft"}
                        </Badge>
                        {job.featured && <Badge variant="outline">Featured</Badge>}
                        <Badge variant="outline" className="capitalize">
                          {job.type}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{job.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-2">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{job.experience}</span>
                        </div>
                        {job.salary && (
                          <div className="flex items-center space-x-1">
                            <DollarSign className="h-3 w-3" />
                            <span>
                              ${job.salary.min.toLocaleString()} - ${job.salary.max.toLocaleString()}{" "}
                              {job.salary.currency}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {job.skills.slice(0, 4).map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {job.skills.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{job.skills.length - 4}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/careers`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/admin/jobs/${job.id}`}>
                          <Edit className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
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
