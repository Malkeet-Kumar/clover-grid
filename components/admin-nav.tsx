"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Home, FileText, Briefcase, DollarSign, Settings, BarChart3 } from "lucide-react"

const adminNavItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: Home,
  },
  {
    title: "Blog Posts",
    href: "/admin/blog",
    icon: FileText,
  },
  {
    title: "Job Posts",
    href: "/admin/jobs",
    icon: Briefcase,
  },
  {
    title: "Pricing Plans",
    href: "/admin/pricing",
    icon: DollarSign,
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
]

export function AdminNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-1">
      {adminNavItems.map((item) => {
        const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href))
        return (
          <Button
            key={item.href}
            variant={isActive ? "default" : "ghost"}
            size="sm"
            asChild
            className={cn("text-sm", isActive && "bg-primary text-primary-foreground")}
          >
            <Link href={item.href}>
              <item.icon className="h-4 w-4 mr-2" />
              {item.title}
            </Link>
          </Button>
        )
      })}
    </nav>
  )
}
