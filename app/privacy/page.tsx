import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { EarthLock } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center mb-10">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-200 bg-primary-50 text-primary-700 text-sm font-medium">
                  <EarthLock className="h-4 w-4" />
                  Privacy
                </span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
                Privacy Policy
                {/* <span className="text-primary bg-gradient-to-r from-primary-600 to-accent-emerald bg-clip-text text-transparent">
                Quote
                </span> */}
              </h1>
            </div>

            <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground">
              <p className="text-muted-foreground mb-6">
                Last updated: January 15, 2024
              </p>

              <h2>Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when
                you create an account, contact us, or use our services.
              </p>

              <h2>How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and
                improve our services, communicate with you, and comply with
                legal obligations.
              </p>

              <h2>Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except as
                described in this policy.
              </p>

              <h2>Data Security</h2>
              <p>
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at privacy@sarucoder.dev.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
