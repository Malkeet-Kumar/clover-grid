import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock, Share2, BookmarkPlus, Twitter, Linkedin, Facebook } from "lucide-react"

// This would typically come from a CMS or database
const samplePost = {
  id: "next-js-15-features",
  title: "Next.js 15: Revolutionary Features That Will Transform Your Development Workflow",
  excerpt:
    "Explore the groundbreaking features in Next.js 15 including improved performance, enhanced developer experience, and new deployment capabilities.",
  content: `
    <h2>Introduction</h2>
    <p>Next.js 15 represents a significant leap forward in React-based web development, introducing features that fundamentally change how we build and deploy modern web applications. This release focuses on performance improvements, developer experience enhancements, and new capabilities that make Next.js even more powerful for building production-ready applications.</p>

    <h2>Key Features in Next.js 15</h2>
    
    <h3>1. Enhanced Performance with Turbopack</h3>
    <p>The integration of Turbopack as the default bundler brings unprecedented build speeds. Our benchmarks show up to 700% faster local development and 10x faster production builds compared to Webpack-based configurations.</p>

    <h3>2. Improved App Router</h3>
    <p>The App Router receives significant updates including better error boundaries, enhanced loading states, and improved nested routing capabilities. These changes make complex application architectures more manageable and performant.</p>

    <h3>3. Server Actions Evolution</h3>
    <p>Server Actions now support streaming responses, better error handling, and improved TypeScript integration. This makes building full-stack applications with Next.js more intuitive and type-safe.</p>

    <h2>Migration Guide</h2>
    <p>Upgrading to Next.js 15 is straightforward for most applications. Here's what you need to know:</p>
    
    <ul>
      <li>Update your package.json dependencies</li>
      <li>Review breaking changes in the migration guide</li>
      <li>Test your application thoroughly in development</li>
      <li>Deploy with confidence using the new deployment features</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Next.js 15 solidifies its position as the leading React framework for production applications. The performance improvements alone make the upgrade worthwhile, but the enhanced developer experience and new features make it essential for modern web development.</p>
  `,
  author: "Sarah Johnson",
  date: "2024-01-15",
  readTime: "8 min read",
  category: "Web Development",
  tags: ["Next.js", "React", "Performance"],
  image: "/placeholder.svg?height=400&width=800",
}

export default function BlogPostPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Article Header */}
      <article className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Button variant="ghost" asChild className="bg-transparent">
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </div>

            {/* Article Meta */}
            <div className="mb-8">
              <Badge className="mb-4">{samplePost.category}</Badge>
              <h1 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {samplePost.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{samplePost.excerpt}</p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{samplePost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(samplePost.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{samplePost.readTime}</span>
                </div>
              </div>

              {/* Social Actions */}
              <div className="flex items-center space-x-4 mb-8">
                <Button variant="outline" size="sm" className="bg-transparent">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="bg-transparent">
                  <BookmarkPlus className="mr-2 h-4 w-4" />
                  Save
                </Button>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" className="bg-transparent">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="bg-transparent">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="bg-transparent">
                    <Facebook className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-[16/9] mb-12 rounded-xl overflow-hidden">
              <img
                src={samplePost.image || "/placeholder.svg"}
                alt={samplePost.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Article Content */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              <div className="lg:col-span-3">
                <div
                  className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80"
                  dangerouslySetInnerHTML={{ __html: samplePost.content }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-border">
                  <h3 className="font-heading font-semibold text-foreground mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {samplePost.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Author Bio */}
                <Card className="mt-12 border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-muted rounded-full flex-shrink-0" />
                      <div>
                        <h3 className="font-heading font-semibold text-foreground mb-2">{samplePost.author}</h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          Senior Full-Stack Developer with 10+ years of experience in React, Next.js, and modern web
                          technologies. Passionate about performance optimization and developer experience.
                        </p>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm" className="bg-transparent">
                            <Twitter className="mr-2 h-4 w-4" />
                            Follow
                          </Button>
                          <Button variant="ghost" size="sm" className="bg-transparent">
                            <Linkedin className="mr-2 h-4 w-4" />
                            Connect
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Table of Contents */}
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-foreground mb-4">Table of Contents</h3>
                    <nav className="space-y-2">
                      <a href="#introduction" className="block text-sm text-muted-foreground hover:text-primary">
                        Introduction
                      </a>
                      <a href="#key-features" className="block text-sm text-muted-foreground hover:text-primary">
                        Key Features in Next.js 15
                      </a>
                      <a href="#migration" className="block text-sm text-muted-foreground hover:text-primary">
                        Migration Guide
                      </a>
                      <a href="#conclusion" className="block text-sm text-muted-foreground hover:text-primary">
                        Conclusion
                      </a>
                    </nav>
                  </CardContent>
                </Card>

                {/* Related Articles */}
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-foreground mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-1">
                          <Link href="/blog/react-performance-optimization" className="hover:text-primary">
                            Advanced React Performance Optimization
                          </Link>
                        </h4>
                        <p className="text-xs text-muted-foreground">12 min read</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-1">
                          <Link href="/blog/saas-architecture-patterns" className="hover:text-primary">
                            Scalable SaaS Architecture Patterns
                          </Link>
                        </h4>
                        <p className="text-xs text-muted-foreground">9 min read</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter CTA */}
                <Card className="border-border bg-primary/5">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-foreground mb-2">Stay Updated</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get the latest development insights delivered to your inbox.
                    </p>
                    <Button className="w-full">Subscribe to Newsletter</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
