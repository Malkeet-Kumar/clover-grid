import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Handshake } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center mb-10">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-200 bg-primary-50 text-primary-700 text-sm font-medium">
                  <Handshake className="w-4 h-4" />
                  Terms & Conditions
                </span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
                Terms Of Service
              </h1>
            </div>

            <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground">
              <p className="text-muted-foreground mb-6">
                Last updated: January 15, 2024
              </p>

              <h2>Acceptance of Terms</h2>
              <p>
                By accessing and using our services, you accept and agree to be
                bound by the terms and provision of this agreement.
              </p>

              <h2>Use License</h2>
              <p>
                Permission is granted to temporarily use our services for
                personal, non-commercial transitory viewing only.
              </p>

              <h2>Disclaimer</h2>
              <p>
                The materials on our website are provided on an 'as is' basis.
                We make no warranties, expressed or implied.
              </p>

              <h2>Limitations</h2>
              <p>
                In no event shall CloverGrid or its suppliers be liable
                for any damages arising out of the use or inability to use our
                services.
              </p>

              <h2>Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please
                contact us at legal@clovergrid.dev.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
