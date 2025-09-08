import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  TrendingUp,
  Code,
  Smartphone,
  Cloud,
} from "lucide-react";
import { getBlogPosts } from "@/lib/api";

const categoryIcons = {
  "Web Development": Code,
  "Mobile Development": Smartphone,
  "Cloud & DevOps": Cloud,
  "AI & Automation": TrendingUp,
  "SaaS Development": Code,
  Technology: TrendingUp,
  Mobile: Smartphone,
};

export default async function BlogPage() {
  const { posts: allPosts } = await getBlogPosts();
  const featuredPosts = allPosts.filter((post) => post.featured);
  const recentPosts = allPosts.filter((post) => !post.featured);

  const categoryCount = allPosts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categories = [
    { name: "All", count: allPosts.length, icon: TrendingUp },
    ...Object.entries(categoryCount).map(([name, count]) => ({
      name,
      count,
      icon: categoryIcons[name as keyof typeof categoryIcons] || TrendingUp,
    })),
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Tech Insights & Industry Trends
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Stay ahead of the curve with expert insights, development
              tutorials, and industry analysis from our team of technology
              professionals.
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Featured Articles
              </h2>
              <p className="text-xl text-muted-foreground">
                Our most popular and impactful content
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group hover:shadow-xl transition-all duration-300 border-border"
                >
                  <div className="aspect-[16/10] relative overflow-hidden rounded-t-lg">
                    <img
                      src={post.imageUrl || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-heading line-clamp-2 group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author.name}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <span>{post.readTime} min read</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                      asChild
                    >
                      <Link href={`/blog/${post.slug}`}>
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories & Recent Posts */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Categories Sidebar */}
            <div className="space-y-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg font-heading">
                    Categories
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category.name}
                      variant="ghost"
                      className="w-full justify-between hover:bg-primary/10 bg-transparent"
                    >
                      <div className="flex items-center space-x-2">
                        <category.icon className="h-4 w-4" />
                        <span>{category.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </Button>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg font-heading">
                    Newsletter
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Get the latest tech insights delivered to your inbox weekly.
                  </p>
                  <div className="space-y-2">
                    <Input type="email" placeholder="Enter your email" />
                    <Button className="w-full">Subscribe</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Posts */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                  Recent Articles
                </h2>
                <p className="text-muted-foreground">
                  Latest insights from our development team
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="group hover:shadow-lg transition-all duration-300 border-border"
                  >
                    <div className="aspect-[16/10] relative overflow-hidden rounded-t-lg">
                      <img
                        src={post.imageUrl || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary">{post.category}</Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-heading line-clamp-2 group-hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </CardTitle>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {post.excerpt}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center space-x-3">
                          <span>{post.author.name}</span>
                          <span>
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </span>
                        </div>
                        <span>{post.readTime} min read</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
