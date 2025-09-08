import { ArrowRight, ArrowRightCircle, CheckCircle, ShieldQuestion } from "lucide-react";
import { AnimatedButton } from "./animated-button";
import { AnimatedCard } from "./animated-card";
import { StaggerContainer, StaggerItem } from "./stagger-container";
import Link from "next/link";

function WhyUs({ version }: { version: 1 | 2 }) {
  if (version === 1) {
    return (
      <section className="py-24 bg-gradient-to-br from-secondary-50 via-primary-50/30 to-accent-emerald/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
                <ShieldQuestion className="w-4 h-4 mr-1" />
                Why Choose Us
              </span>
            </div>

            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Your Success Is Our{" "}
              <span className="text-primary">Top Priority</span>
            </h2>

            <p className="text-xl text-secondary-600 mb-10 leading-relaxed">
              We combine technical expertise with business insight to create
              solutions that help your business thrive. Our approach is centered
              on delivering measurable impact and long-term growth.
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            {[
              {
                text: "Experienced and collaborative team",
                desc: "Our developers and strategists bring practical know-how to every project",
              },
              {
                text: "Innovative technologies and best practices",
                desc: "We leverage modern tools and methodologies to build efficient, scalable solutions",
              },
              {
                text: "Agile and transparent workflows",
                desc: "Frequent updates and close collaboration ensure projects meet your goals",
              },
              {
                text: "Reliable support and guidance",
                desc: "We stay by your side to help with any challenges during and after delivery",
              },
              {
                text: "Proven approach to delivering results",
                desc: "We focus on quality, performance, and customer satisfaction throughout the process",
              },
              // ✨ Extra startup-friendly points
              {
                text: "Cost-effective and scalable solutions",
                desc: "Perfect for startups — we design strategies that grow with your business",
              },
              {
                text: "Fast execution and lean processes",
                desc: "We move quickly to bring your ideas to life without unnecessary overhead",
              },
              {
                text: "Tailored guidance for early-stage growth",
                desc: "Our team provides mentorship and insights to help you avoid common pitfalls",
              },
              {
                text: "Strong community and network support",
                desc: "We connect you with industry experts, partners, and opportunities to expand faster",
              },
            ].map((item, index) => (
              <StaggerItem key={index}>
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/60 transition-colors duration-300 text-left">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-foreground font-semibold text-lg mb-1">
                      {item.text}
                    </div>
                    <div className="text-secondary-600 text-sm">
                      {item.desc}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="w-full text-center mt-16">
            <AnimatedButton
              size="lg"
              asChild
              className="bg-primary hover:bg-primary-600 shadow-lg shadow-primary-500/25"
            >
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </AnimatedButton>
          </div>
        </div>
      </section>
    );
  }

  if (version === 2) {
    return (
      <section className="py-24 bg-gradient-to-br from-secondary-50 via-primary-50/30 to-accent-emerald/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
                  Why Choose Us
                </span>
              </div>

              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-8">
                Your Success Is Our{" "}
                <span className="text-primary">Priority</span>
              </h2>

              <p className="text-xl text-secondary-600 mb-10 leading-relaxed">
                We combine technical expertise with business acumen to deliver
                solutions that drive measurable results and sustainable growth.
              </p>

              <StaggerContainer className="space-y-6">
                {[
                  {
                    text: "Expert team with 10+ years of experience",
                    desc: "Senior developers and architects with proven track records",
                  },
                  {
                    text: "Cutting-edge technologies and best practices",
                    desc: "Always using the latest, most effective tools and methodologies",
                  },
                  {
                    text: "Agile development methodology",
                    desc: "Fast, iterative delivery with continuous client collaboration",
                  },
                  {
                    text: "24/7 support and maintenance",
                    desc: "Round-the-clock monitoring and rapid issue resolution",
                  },
                  {
                    text: "Proven track record with 200+ successful projects",
                    desc: "Consistently delivering projects on time and within budget",
                  },
                ].map((item, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/60 transition-colors duration-300">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="text-foreground font-semibold text-lg mb-1">
                          {item.text}
                        </div>
                        <div className="text-secondary-600 text-sm">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div className="mt-12">
                <AnimatedButton
                  size="lg"
                  asChild
                  className="bg-primary hover:bg-primary-600 shadow-lg shadow-primary-500/25"
                >
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </AnimatedButton>
              </div>
            </div>

            <AnimatedCard direction="right" delay={0.3}>
              <div className="relative">
                {/* Stats cards */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white border border-secondary-200 rounded-2xl p-8 text-center shadow-lg">
                    <div className="text-4xl font-bold text-primary-600 mb-2">
                      200+
                    </div>
                    <div className="text-secondary-600 font-medium">
                      Projects Completed
                    </div>
                  </div>
                  <div className="bg-white border border-secondary-200 rounded-2xl p-8 text-center shadow-lg">
                    <div className="text-4xl font-bold text-accent-emerald mb-2">
                      95%
                    </div>
                    <div className="text-secondary-600 font-medium">
                      Client Retention
                    </div>
                  </div>
                  <div className="bg-white border border-secondary-200 rounded-2xl p-8 text-center shadow-lg">
                    <div className="text-4xl font-bold text-accent-teal mb-2">
                      24/7
                    </div>
                    <div className="text-secondary-600 font-medium">
                      Support Available
                    </div>
                  </div>
                  <div className="bg-white border border-secondary-200 rounded-2xl p-8 text-center shadow-lg">
                    <div className="text-4xl font-bold text-accent-lime mb-2">
                      5+
                    </div>
                    <div className="text-secondary-600 font-medium">
                      Years Experience
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-200/30 rounded-full -z-10"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-emerald/20 rounded-full -z-10"></div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>
    );
  }
}

export default WhyUs;
