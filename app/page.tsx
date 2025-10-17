"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FeatureCard } from "@/components/feature-card"
import {
  Zap,
  BarChart3,
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Mail,
  TrendingUp,
  Calculator,
  Shield,
} from "lucide-react"

export default function Home() {
  const socialLinks = [
    {
      name: "Twitter",  
      icon: Twitter,
      url: "https://x.com/PeachyBytes",
      color: "hover:text-blue-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/dunkwu-alexander-4b38081b6/",
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Harlexander",
      color: "hover:text-gray-700",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:dunkwualex6@gmail.com",
      color: "hover:text-primary",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-40">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Nigeria 2025 Tax Compliant</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
                  Smart Tax <span className="gradient-text">Management</span> Made Simple
                </h1>
              </div>

              <p className="text-lg text-muted-foreground text-balance leading-relaxed">
                Calculate your taxes accurately with our AI-powered calculator. Stay updated with Nigeria's 2025 tax
                reforms and optimize your deductions instantly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" asChild className="group">
                  <Link href="/calculator">
                    Try Tax Calculator
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/tax-reform-2025">Learn About 2025 Reforms</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <Card className="relative p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl -mr-20 -mt-20" />
                <div className="relative space-y-6">
                  <div className="flex items-center justify-between p-4 bg-background/60 rounded-xl border border-border/50 backdrop-blur-sm">
                    <span className="text-sm font-medium">Total Income</span>
                    <span className="text-2xl font-bold text-primary">₦5,000,000</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-background/60 rounded-xl border border-border/50 backdrop-blur-sm">
                    <span className="text-sm font-medium">Tax Payable</span>
                    <span className="text-2xl font-bold text-accent">₦425,000</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-background/60 rounded-xl border border-border/50 backdrop-blur-sm">
                    <span className="text-sm font-medium">Effective Rate</span>
                    <span className="text-sm font-semibold text-primary">8.5%</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 md:py-32 bg-muted/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Everything You Need for Tax Success</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful tools designed specifically for Nigeria's tax landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              icon={<Calculator className="h-6 w-6" />}
              title="Nigeria 2025 Tax Compliant"
              description="Fully updated with Nigeria's latest tax reforms and regulations for 2025. Stay compliant with current tax laws."
            />
            <FeatureCard
              icon={<TrendingUp className="h-6 w-6" />}
              title="Accurate Calculations"
              description="Calculate your tax liability with precision using the latest tax bands and deduction rules."
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Secure & Private"
              description="Your financial data is encrypted and protected. We never share your information."
            />
            <FeatureCard
              icon={<BarChart3 className="h-6 w-6" />}
              title="Smart Insights"
              description="Get detailed breakdowns of your tax calculation and identify optimization opportunities."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">How It Works</h2>
            <p className="text-lg text-muted-foreground">Calculate your taxes in three simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                icon: <Calculator className="h-8 w-8" />,
                title: "Enter Your Income",
                description: "Input your total income and any eligible deductions.",
              },
              {
                step: 2,
                icon: <Zap className="h-8 w-8" />,
                title: "Get Instant Results",
                description: "Our calculator processes your data using Nigeria's 2025 tax rules.",
              },
              {
                step: 3,
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Review & Optimize",
                description: "See your tax liability and get insights on potential savings.",
              },
            ].map((item) => (
              <div key={item.step} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Card className="relative p-8 text-center h-full border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-primary font-bold text-lg mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
                {item.step < 3 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 h-8 w-8 items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary/15 to-accent/15 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to Calculate Your Taxes?</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Use our AI-powered calculator to get accurate tax calculations based on Nigeria's 2025 tax reforms.
          </p>
          <Button size="lg" asChild className="group">
            <Link href="/calculator">
              Start Calculating Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Social Links & Credit Section */}
      <section className="py-16 md:py-20 bg-muted/50 border-t border-border">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
              <p className="text-sm text-muted-foreground">Stay updated with the latest tax news and updates</p>
            </div>

            <div className="flex gap-8 items-center justify-center">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-muted hover:bg-primary/10 transition-all duration-300 ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>

            <div className="border-t border-border w-full pt-10 mt-6">
              <p className="text-center text-sm text-muted-foreground">
                Built with care for Nigeria's tax community. © 2025 AI Drive Tax Manager.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
