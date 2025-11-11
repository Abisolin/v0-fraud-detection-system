"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Shield, ArrowLeft, CheckCircle, Calendar, Mail, Building2, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ConfirmationPage() {
  const searchParams = useSearchParams()

  const name = searchParams.get("name") || "Guest"
  const email = searchParams.get("email") || ""
  const company = searchParams.get("company") || ""
  const industry = searchParams.get("industry") || ""
  const transactionVolume = searchParams.get("transactionVolume") || ""

  const formatIndustry = (ind: string) => {
    const map: { [key: string]: string } = {
      fintech: "FinTech",
      banking: "Banking",
      ecommerce: "E-Commerce",
      payment: "Payment Processing",
      insurance: "Insurance",
      other: "Other",
    }
    return map[ind] || ind
  }

  const formatVolume = (vol: string) => {
    const map: { [key: string]: string } = {
      under1m: "Under 1M",
      "1m-10m": "1M - 10M",
      "10m-100m": "10M - 100M",
      over100m: "Over 100M",
    }
    return map[vol] || vol
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/95">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Shield className="h-5 w-5" />
              </div>
              <span className="text-xl font-semibold text-foreground">GuardianAI</span>
            </Link>
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Message */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
              <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3 text-balance">Demo Request Confirmed!</h1>
          <p className="text-lg text-foreground/70 mb-2">
            Thank you for your interest, {name}. Your demo request has been successfully submitted.
          </p>
          <p className="text-foreground/60">
            Our team will contact you within 24 hours to schedule your personalized demonstration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Request Details */}
          <Card className="p-8 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-primary" />
              Request Details
            </h2>

            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium text-foreground/70">Name</label>
                <p className="text-foreground mt-1 text-lg font-medium">{name}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground/70 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Address
                </label>
                <p className="text-foreground mt-1 text-lg font-medium">{email}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground/70 flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  Company
                </label>
                <p className="text-foreground mt-1 text-lg font-medium">{company}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground/70">Industry</label>
                <p className="text-foreground mt-1 text-lg font-medium">{formatIndustry(industry)}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground/70 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Monthly Transaction Volume
                </label>
                <p className="text-foreground mt-1 text-lg font-medium">{formatVolume(transactionVolume)}</p>
              </div>
            </div>
          </Card>

          {/* Next Steps */}
          <Card className="p-8 border border-border bg-primary/5 dark:bg-primary/10">
            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Calendar className="h-6 w-6 text-primary" />
              What's Next?
            </h2>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Check Your Email</h3>
                  <p className="text-sm text-foreground/70 mt-1">
                    We'll send you a confirmation email within 1 hour with initial details.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Schedule Your Demo</h3>
                  <p className="text-sm text-foreground/70 mt-1">
                    Our team will reach out to find the best time for your 30-minute demo.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Experience GuardianAI</h3>
                  <p className="text-sm text-foreground/70 mt-1">
                    See live fraud detection, custom analytics, and integration possibilities.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Start Your Journey</h3>
                  <p className="text-sm text-foreground/70 mt-1">
                    Discuss implementation, pricing, and next steps with our team.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Additional Info */}
        <Card className="p-8 border border-border mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-foreground mb-2">How long is the demo?</h3>
              <p className="text-foreground/70 text-sm">
                Our standard demo is 30 minutes, but we can extend it if you have more questions about specific features
                or your use case.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">What should I prepare?</h3>
              <p className="text-foreground/70 text-sm">
                You don't need to prepare anything! Our team will walk you through everything. However, if you have
                specific fraud scenarios or concerns, feel free to share them.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">Can I invite team members?</h3>
              <p className="text-foreground/70 text-sm">
                We recommend inviting stakeholders from your fraud prevention, compliance, and technical teams.
              </p>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <Link href="/">
            <Button variant="outline">Return to Home</Button>
          </Link>
          <Link href="/monitoring">
            <Button className="bg-primary hover:bg-primary/90">Explore Features</Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
