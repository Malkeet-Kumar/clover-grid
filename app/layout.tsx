import { ScrollToTop } from "@/components/scroll-to-top";
import { ThemeProvider } from "@/components/theme-provider";
import { ToastifyContainer } from "@/components/toastify-container";
import { UIInitializer } from "@/components/ui-initializer";
import { StoreProvider } from "@/contexts/store-context";
import type { Metadata, Viewport } from "next";
import { Open_Sans, Work_Sans } from "next/font/google";
import type React from "react";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#ffffff" },
  ],
};

export const metadata: Metadata = {
  title: "SARU CODER - Professional IT Services",
  description:
    "Leading IT services company specializing in web development, mobile apps, cloud solutions, and AI automation. Transform your business with our expert team.",
  keywords:
    "IT services, web development, mobile apps, cloud solutions, AI automation, React, Next.js, Node.js, React Native, Expo",
  authors: [{ name: "SARU CODER" }],
  creator: "SARU CODER",
  publisher: "SARU CODER",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://SARU CODER.dev",
    title: "SARU CODER - Professional IT Services",
    description:
      "Leading IT services company specializing in web development, mobile apps, cloud solutions, and AI automation.",
    siteName: "SARU CODER.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${openSans.variable} blue`}
      suppressHydrationWarning
    >
      <body className="w-full bg-background font-body antialiased">
        <StoreProvider>
          <ThemeProvider>
            <UIInitializer />
            {children}
            <ScrollToTop />
            <ToastifyContainer />
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
