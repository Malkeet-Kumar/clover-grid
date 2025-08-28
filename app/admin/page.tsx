import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import {
  FileText,
  Briefcase,
  DollarSign,
  TrendingUp,
  Plus,
} from "lucide-react";
import { getBlogPosts, getJobPosts, getPricingPlans } from "@/lib/api";

export default async function AdminDashboard() {
  const { posts: blogPosts } = await getBlogPosts();
  const jobPosts = await getJobPosts();
  const pricingPlans = await getPricingPlans();

  const stats = [
    {
      title: "Blog Posts",
      value: blogPosts.length,
      icon: FileText,
      href: "/admin/blog",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Job Posts",
      value: jobPosts.length,
      icon: Briefcase,
      href: "/admin/jobs",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Pricing Plans",
      value: pricingPlans.length,
      icon: DollarSign,
      href: "/admin/pricing",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Published Posts",
      value: blogPosts.filter((post) => post.published).length,
      icon: TrendingUp,
      href: "/admin/blog",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-muted/30">
        <Navigation />

        <div className="pt-24 pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-2">
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground">
                Manage your website content and settings
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat) => (
                <Card
                  key={stat.title}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          {stat.title}
                        </p>
                        <p className="text-2xl font-bold text-foreground">
                          {stat.value}
                        </p>
                      </div>
                      <div className={`p-3 rounded-full ${stat.bgColor}`}>
                        <stat.icon className={`h-6 w-6 ${stat.color}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5" />
                    <span>Blog Management</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 ">
                  <p className="text-sm text-muted-foreground">
                    Create and manage blog posts, articles, and insights.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex space-x-2">
                    <Button asChild size="sm">
                      <Link href="/admin/blog/new">
                        <Plus className="h-4 w-4 mr-1" />
                        New Post
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/admin/blog">Manage Posts</Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Briefcase className="h-5 w-5" />
                    <span>Job Management</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-1">
                  <p className="text-sm text-muted-foreground">
                    Post new job openings and manage applications.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex space-x-2">
                    <Button asChild size="sm">
                      <Link href="/admin/jobs/new">
                        <Plus className="h-4 w-4 mr-1" />
                        New Job
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/admin/jobs">Manage Jobs</Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5" />
                    <span>Pricing Management</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-1">
                  <p className="text-sm text-muted-foreground">
                    Update pricing plans and service packages.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex space-x-2">
                    <Button asChild size="sm">
                      <Link href="/admin/pricing/new">
                        <Plus className="h-4 w-4 mr-1" />
                        New Plan
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/admin/pricing">Manage Plans</Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {blogPosts.slice(0, 5).map((post) => (
                    <div
                      key={post.id}
                      className="flex items-center justify-between py-2 border-b border-border last:border-0"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <div>
                          <p className="font-medium text-sm">{post.title}</p>
                          <p className="text-xs text-muted-foreground">
                            Published{" "}
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/admin/blog/${post.id}`}>Edit</Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
