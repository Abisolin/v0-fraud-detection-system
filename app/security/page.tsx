"use client"

import { ArrowLeft, Shield, Lock, CheckCircle, Award } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const certifications = [
  { name: "PCI-DSS Level 1", status: "Certified", icon: Award },
  { name: "SOC 2 Type II", status: "Certified", icon: Shield },
  { name: "ISO 27001", status: "Certified", icon: Lock },
  { name: "GDPR Compliant", status: "Active", icon: CheckCircle },
]

const securityFeatures = [
  {
    title: "End-to-End Encryption",
    desc: "All data in transit encrypted with TLS 1.3 and 256-bit encryption",
  },
  {
    title: "PCI-DSS Level 1",
    desc: "Highest level compliance certification for payment card industry standards",
  },
  {
    title: "SOC 2 Type II Audit",
    desc: "Comprehensive security, availability, and confidentiality certifications",
  },
  {
    title: "GDPR & CCPA",
    desc: "Full compliance with EU GDPR and California CCPA data protection regulations",
  },
  {
    title: "Security Audits",
    desc: "Regular third-party security audits and penetration testing annually",
  },
  {
    title: "Data Residency",
    desc: "Choose data storage location to meet regulatory requirements",
  },
]

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-foreground hover:text-foreground/70 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-foreground">Secure Processing</h1>
            <div className="w-32" />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Certifications Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon
            return (
              <Card key={idx} className="border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-green-500" />
                    <CardTitle className="text-sm font-medium text-foreground">{cert.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-bold text-foreground">{cert.status}</p>
                  <p className="text-xs text-foreground/70 mt-1">Verified & Active</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Main Security Description */}
        <Card className="border-border mb-8">
          <CardHeader>
            <CardTitle className="text-foreground">Enterprise-Grade Security</CardTitle>
            <CardDescription className="text-foreground/70">
              Industry-leading compliance and encryption standards
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground/80">
              Our fraud detection system prioritizes security with enterprise-grade standards and comprehensive
              compliance certifications:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {securityFeatures.map((feature, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-secondary/50 border border-border/50">
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-foreground/70">{feature.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Security Details */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Encryption & Data Protection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 text-foreground/80 text-sm">
                <li className="flex items-start gap-2">
                  <Lock className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>AES-256 encryption for data at rest</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lock className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>TLS 1.3 for all data in transit</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lock className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>HSM (Hardware Security Module) key management</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lock className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>PCI-DSS Level 1 compliance</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Compliance & Regulations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 text-foreground/80 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>GDPR - EU data protection regulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>CCPA - California consumer privacy act</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>SOC 2 Type II - Security audit certified</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>ISO 27001 - Information security management</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
