import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "TechFlow Solutions - Professional IT Services",
  description:
    "Leading IT services company specializing in web development, mobile apps, cloud solutions, and AI automation. Transform your business with our expert team.",
  keywords: "IT services, web development, mobile apps, cloud solutions, AI automation, React, Next.js, Node.js",
  authors: [{ name: "TechFlow Solutions" }],
  creator: "TechFlow Solutions",
  publisher: "TechFlow Solutions",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techflowsolutions.com",
    title: "TechFlow Solutions - Professional IT Services",
    description:
      "Leading IT services company specializing in web development, mobile apps, cloud solutions, and AI automation.",
    siteName: "TechFlow Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechFlow Solutions - Professional IT Services",
    description:
      "Leading IT services company specializing in web development, mobile apps, cloud solutions, and AI automation.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${openSans.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-body antialiased">
        <ThemeProvider>
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
