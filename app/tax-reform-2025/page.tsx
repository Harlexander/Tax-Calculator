"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  TrendingUp,
  Users,
  DollarSign,
  FileText,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Building2,
  Zap,
  ShoppingCart,
  BarChart3,
  Scale,
  Briefcase
} from "lucide-react"

export default function TaxReform2025() {
  const reforms = [
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Increased Exemption Threshold for Small Companies",
      description:
        "Small companies now qualify with turnover up to ₦50 million and fixed assets not above ₦250 million.",
      details: [
        "Exemption from Companies Income Tax (CIT)",
        "Exemption from Capital Gains Tax (CGT)",
        "Exemption from 4% Development Levy",
      ],
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Higher Capital Gains Tax (CGT) Rate for Companies",
      description: "CGT increased from 10% to 30% for companies to align with CIT and close tax loopholes.",
      details: [
        "30% CGT rate for companies",
        "Closes loopholes for income labeling",
        "For individuals: CGT taxed at personal income tax rate",
      ],
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "CGT on Indirect Transfer of Shares",
      description: "New rule on selling shares in foreign companies that indirectly own Nigerian company shares.",
      details: [
        "Exemption threshold increased to ₦150 million (from ₦100 million)",
        "Gains below ₦10 million remain exempt",
        "Subject to tax treaty protections",
      ],
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Introduction of Development Levy",
      description:
        "New consolidated 4% Development Levy on assessable profits for all companies except small companies.",
      details: [
        "Replaces Tertiary Education Tax (TET)",
        "Replaces Information Technology Levy (NITDA)",
        "Replaces NASENI and Police Trust Fund Levies",
      ],
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Minimum Effective Tax Rate (ETR) for Large Companies",
      description:
        "Large/multinational companies must pay minimum 15% ETR if global turnover is EUR 750M+ or Nigerian turnover is ₦50B+.",
      details: [
        "Ensures big companies can't reduce taxes below 15%",
        "Parent companies pay 'top-up tax' if subsidiaries pay less",
        "Free Zone exporters not in multinational groups exempt",
      ],
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "More Progressive Personal Income Tax (PIT)",
      description: "Updated tax brackets with relief for lower earners and progressive rates up to 25%.",
      details: [
        "Individuals earning ₦800,000 or less per year fully exempt",
        "Higher earners pay up to 25% tax in progressive bands",
        "Severance/injury compensation exemption increased to ₦50 million",
      ],
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Economic Development Incentive (EDI)",
      description: "Replaces Pioneer Status with 5% annual tax credit for 5 years on qualifying capital investments.",
      details: [
        "5% annual tax credit for 5 years",
        "Unused credits can be carried forward for another 5 years",
        "Encourages capital investment and business growth",
      ],
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Clear Definition of Resident and Non-Resident Individuals",
      description: "New clarity on tax residency based on economic and family ties, not just physical presence.",
      details: [
        "Residents taxed on worldwide income",
        "Non-residents taxed only on Nigerian-sourced income",
        "Considers both economic and family ties",
      ],
    },
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: "Establishment of the Tax Ombuds Office",
      description: "New neutral platform for resolving disputes between taxpayers and tax authorities.",
      details: [
        "Handles complaints and disputes fairly",
        "Improves transparency and taxpayer confidence",
        "Provides alternative dispute resolution",
      ],
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Zero VAT on Essential Goods and Services",
      description: "More items now VAT-free including food, education, medical products, and utilities.",
      details: [
        "Basic food items and educational materials",
        "Medical products and services",
        "Electricity generation and transmission",
        "Tuition fees and exports (except oil & gas)",
      ],
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Input VAT Recovery Expanded",
      description: "Businesses can now claim input VAT on all goods, services, and fixed assets purchased.",
      details: [
        "Claim VAT on all goods and services",
        "Claim VAT on fixed asset purchases",
        "Aligns Nigeria with global VAT standards",
        "Improves business cash flow",
      ],
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "VAT Fiscalisation & E-Invoicing",
      description: "Digital VAT reporting using tax authority's e-invoicing system for transparency.",
      details: [
        "Mandatory use of tax authority's e-invoicing system",
        "Reduces VAT fraud and improves transparency",
        "Positions Nigeria as Africa's early adopter of VAT digitalization",
      ],
    },
  ]

  const faqs = [
    {
      question: "How does the increased small company exemption threshold affect my business?",
      answer:
        "If your company earns ₦50 million or less per year with fixed assets not exceeding ₦250 million, you're now exempt from CIT, CGT, and the 4% Development Levy. Use our calculator to determine your eligibility.",
    },
    {
      question: "What is the new 30% CGT rate and how does it affect me?",
      answer:
        "Companies now pay 30% CGT (up from 10%) on capital gains. For individuals, CGT is taxed at your personal income tax rate based on your income bracket. This closes loopholes where income was labeled as capital gains to reduce taxes.",
    },
    {
      question: "Am I exempt from personal income tax if I earn ₦800,000 or less?",
      answer:
        "Yes! Individuals earning ₦800,000 or less per year are now fully exempt from personal income tax. Higher earners pay progressive rates up to 25% depending on their income bracket.",
    },
    {
      question: "What is the new Development Levy and what does it replace?",
      answer:
        "The 4% Development Levy is a new consolidated tax on assessable profits for all companies except small companies. It replaces multiple old levies including TET, NITDA, NASENI, and Police Trust Fund Levies.",
    },
    {
      question: "How does the minimum 15% ETR affect large companies?",
      answer:
        "If your company has global turnover of EUR 750M+ or Nigerian turnover of ₦50B+, you must pay a minimum effective tax rate of 15%. This prevents large companies from using deductions to reduce taxes below this threshold.",
    },
    {
      question: "What are the benefits of the new Economic Development Incentive (EDI)?",
      answer:
        "Eligible companies get a 5% annual tax credit for 5 years on qualifying capital investments. Unused credits can be carried forward for another 5 years, encouraging business investment and growth.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-balance">Nigeria Tax Reform 2025</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
              Comprehensive guide to Nigeria's 12 major tax reforms for 2025. Understand how these changes affect your
              personal taxes, business operations, and investment strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/calculator">
                  Calculate Your Impact
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Reforms Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">12 Major Tax Reforms</h2>
            <p className="text-lg text-muted-foreground">
              Detailed breakdown of all 2025 tax reforms affecting individuals and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reforms.map((reform, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    {reform.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{reform.title}</h3>
                    <p className="text-sm text-muted-foreground">{reform.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {reform.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Analysis Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Is Affected?</h2>
            <p className="text-lg text-muted-foreground">Understanding the impact on different taxpayer groups</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                group: "Individual Earners",
                impact:
                  "Earn ₦800,000 or less? You're now fully exempt. Higher earners benefit from progressive tax rates up to 25% and enhanced deductions.",
                icon: <Users className="h-6 w-6" />,
              },
              {
                group: "Small Business Owners",
                impact:
                  "Companies with turnover up to ₦50M and fixed assets up to ₦250M are now exempt from CIT, CGT, and Development Levy.",
                icon: <Building2 className="h-6 w-6" />,
              },
              {
                group: "Large Corporations",
                impact:
                  "Subject to 15% minimum effective tax rate if global turnover exceeds EUR 750M or Nigerian turnover exceeds ₦50B.",
                icon: <TrendingUp className="h-6 w-6" />,
              },
            ].map((item, index) => (
              <Card key={index} className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.group}</h3>
                <p className="text-sm text-muted-foreground">{item.impact}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Get answers to common questions about the 2025 reforms</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Taxes?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Use our AI-powered calculator to understand exactly how the 2025 reforms affect your specific situation and
            maximize your tax benefits.
          </p>
          <Button size="lg" asChild>
            <Link href="/calculator">
              Calculate Your Tax Impact
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
